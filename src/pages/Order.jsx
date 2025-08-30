import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import NameField from '../components/order/NameField'
import SizeSelector from '../components/order/SizeSelector'
import ToppingsSelector from '../components/order/ToppingsSelector'
import NotesField from '../components/order/NotesField'

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
  const [malzemeler, setMalzemeler] = useState(initialMalzemeler)
  const [not, setNot] = useState('')
  const [submitting, setSubmitting] = useState(false)

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

  function handleToggleTopping(key, checked) {
    setMalzemeler((prev) => ({ ...prev, [key]: checked }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit || submitting) return

    setSubmitting(true)

    const secilenMalzemeler = Object.keys(malzemeler).filter((k) => malzemeler[k])
    const payload = { isim, boyut, malzemeler: secilenMalzemeler, not }

    try {
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
      alert('Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <div>
        <h1 className="title">Sipariş Formu</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <NameField value={isim} onChange={setIsim} error={nameError} />

        <SizeSelector value={boyut} onChange={setBoyut} />

        <ToppingsSelector
          toppings={malzemeler}
          onToggle={handleToggleTopping}
          min={4}
          max={10}
          error={toppingsError}
        />

        <NotesField value={not} onChange={setNot} />

        <div className="size-field">
          <button type="submit" disabled={!canSubmit || submitting}>
            {submitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
          </button>
        </div>
      </form>
    </main>
  )
}

export default Order

