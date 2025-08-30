import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import NameField from '../components/order/NameField'
import SizeSelector from '../components/order/SizeSelector'
import ToppingsSelector from '../components/order/ToppingsSelector'
import NotesField from '../components/order/NotesField'
import DoughOptions from '../components/order/DoughOptions'
import SummaryBox from '../components/order/SummaryBox'
import './Order.css'

const initialMalzemeler = {
  pepperoni: false,
  sosis: false,
  sucuk: false,
  domates: false,
  biber: false,
  misir: false,
  zeytin: false,
  mantar: false,
  ananas: false,
  sogan: false,
  sarimsak: false,
  jalapeno: false,
}

function Order({ onSubmitSuccess }) {
  const history = useHistory()

  const [isim, setIsim] = useState('')
  const [boyut, setBoyut] = useState('')
  const [hamur, setHamur] = useState('')
  const [malzemeler, setMalzemeler] = useState(initialMalzemeler)
  const [not, setNot] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const isimValid = isim.trim().length >= 3
  const nameError = isim && !isimValid ? 'En az 3 karakter girin' : ''
  const sizeValid = !!boyut

  const toppingsCount = Object.values(malzemeler).filter(Boolean).length
  const toppingsValid = toppingsCount >= 4 && toppingsCount <= 10
  const toppingsError = !toppingsValid
    ? toppingsCount < 4
      ? 'En az 4 malzeme seçin'
      : 'En fazla 10 malzeme seçebilirsiniz'
    : ''
  const canSubmit = isimValid && sizeValid && toppingsValid

  // pricing
  const BASE_PRICE = 85.5
  const TOPPING_PRICE = 5
  const SIZE_MULTIPLIERS = { Kucuk: 1, Orta: 1.2, Buyuk: 1.5 }
  const DOUGH_MULTIPLIERS = { Ince: 1, Orta: 1.05, Kalin: 1.1 }
  const SIZE_LABELS = { Kucuk: 'Küçük', Orta: 'Orta', Buyuk: 'Büyük' }
  const DOUGH_LABELS = { Ince: 'İnce', Orta: 'Orta', Kalin: 'Kalın' }

  const sizeMultiplier = SIZE_MULTIPLIERS[boyut] || 1
  const doughMultiplier = DOUGH_MULTIPLIERS[hamur] || 1
  const baseSubtotal = BASE_PRICE * sizeMultiplier * doughMultiplier
  const toppingsCost = toppingsCount * TOPPING_PRICE
  const total = baseSubtotal + toppingsCost

  function handleToggleTopping(key, checked) {
    setMalzemeler((prev) => ({ ...prev, [key]: checked }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit || submitting) return

    setSubmitting(true)

    const secilenMalzemeler = Object.keys(malzemeler).filter((k) => malzemeler[k])
    const payload = { isim, boyut, hamur, malzemeler: secilenMalzemeler, not, total }

    try {
      setSubmitError('')
      const res = await axios.post('https://reqres.in/api/pizza', payload)
      console.log('Sipariş cevabı:', res.data)

      if (typeof onSubmitSuccess === 'function') {
        onSubmitSuccess({ payload, response: res.data })
      }
      history.push('/success')

      // optional reset
      setIsim('')
      setBoyut('')
      setMalzemeler(initialMalzemeler)
      setNot('')
    } catch (err) {
      console.error(err)
      setSubmitError('Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="order-page">
      <h1 className="page-title">Sipariş Oluştur</h1>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-area">
          <NameField value={isim} onChange={setIsim} error={nameError} />

          <fieldset className="section">
            <SizeSelector value={boyut} onChange={setBoyut} />
          </fieldset>

          <fieldset className="section">
            <DoughOptions value={hamur} onChange={setHamur} />
          </fieldset>

          <fieldset className="section">
            <ToppingsSelector
              toppings={malzemeler}
              onToggle={handleToggleTopping}
              min={4}
              max={10}
              error={toppingsError}
            />
          </fieldset>

          <div className="section">
            <NotesField value={not} onChange={setNot} />
          </div>
        </div>

        <div className="summary-area">
          <SummaryBox
            basePrice={BASE_PRICE}
            sizeLabel={SIZE_LABELS[boyut]}
            sizeMultiplier={sizeMultiplier}
            doughLabel={DOUGH_LABELS[hamur]}
            doughMultiplier={doughMultiplier}
            baseSubtotal={baseSubtotal}
            toppingsCount={toppingsCount}
            toppingPrice={TOPPING_PRICE}
            toppingsCost={toppingsCost}
            total={total}
            submitting={submitting}
            canSubmit={canSubmit}
            submitError={submitError}
          />
        </div>
      </form>
    </main>
  )
}

export default Order
