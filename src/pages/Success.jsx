import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

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
    <div className="success-message" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tebrikler!</h1>
      <h2>Siparişiniz Alındı</h2>

      {payload ? (
        <div style={{ marginTop: 24 }}>
          <div><strong>İsim:</strong> {payload.isim}</div>
          <div><strong>Boyut:</strong> {payload.boyut}</div>
          <div>
            <strong>Malzemeler:</strong> {payload.malzemeler.join(', ')}
          </div>
          {payload.not && (
            <div><strong>Not:</strong> {payload.not}</div>
          )}
          {typeof payload.total === 'number' && (
            <div style={{ marginTop: 8 }}>
              <strong>Toplam:</strong> {payload.total.toFixed(2)}₺
            </div>
          )}
          {response && (
            <div style={{ marginTop: 12, fontSize: 12, color: '#555' }}>
              id: {response.id} — {response.createdAt}
            </div>
          )}
        </div>
      ) : (
        <div style={{ marginTop: 16 }}>Yönlendiriliyor…</div>
      )}
    </div>
  )
}
