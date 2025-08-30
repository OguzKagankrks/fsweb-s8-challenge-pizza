import { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './Success.css'

export default function Success({ order }) {
  const history = useHistory()
  const payload = order?.payload
  const response = order?.response

  useEffect(() => {
    if (!order) {
      history.replace('/')
    }
  }, [order, history])

  return (
    <main className="success-page">
      <div className="container">
      <section className="success-card">
        <h1 className="title">Tebrikler!</h1>
        <p className="subtitle">Siparisiniz alindi</p>

        {payload ? (
          <div className="summary">
            <div className="row"><span>Isim</span><strong>{payload.isim}</strong></div>
            <div className="row"><span>Boyut</span><strong>{payload.boyut}</strong></div>
            <div className="row"><span>Malzemeler</span><strong>{payload.malzemeler.join(', ')}</strong></div>
            {payload.not && (
              <div className="row"><span>Not</span><strong>{payload.not}</strong></div>
            )}
            {typeof payload.total === 'number' && (
              <div className="row total"><span>Toplam</span><strong>{payload.total.toFixed(2)}₺</strong></div>
            )}
            {response && (
              <div className="meta">id: {response.id} — {response.createdAt}</div>
            )}
            <div className="actions">
              <Link className="cta" to="/form">Yeni Siparis Ver</Link>
            </div>
          </div>
        ) : (
          <div className="loading">Yonlendiriliyor...</div>
        )}
      </section>
      </div>
    </main>
  )
}
