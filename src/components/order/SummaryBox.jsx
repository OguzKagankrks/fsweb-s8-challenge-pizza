import './SummaryBox.css'

export default function SummaryBox({
  basePrice,
  toppingsCount,
  toppingPrice,
  total,
  submitting,
  canSubmit,
  submitError,
}) {
  const selections = (toppingsCount || 0) * (toppingPrice || 0)

  return (
    <aside className="summary-box">
      <h3 className="summary-title">Sipariş Toplamı</h3>

      <div className="row">
        <span>Seçimler</span>
        <strong>{selections.toFixed(2)}₺</strong>
      </div>

      <div className="row total">
        <span>Toplam</span>
        <strong>{total.toFixed(2)}₺</strong>
      </div>

      {submitError && <div className="error" role="alert">{submitError}</div>}

      <button type="submit" className="submit" disabled={!canSubmit || submitting}>
        {submitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
      </button>
    </aside>
  )
}

