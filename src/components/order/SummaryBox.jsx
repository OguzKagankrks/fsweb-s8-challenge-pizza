import './SummaryBox.css'

export default function SummaryBox({
  basePrice,
  sizeLabel,
  sizeMultiplier = 1,
  doughLabel,
  doughMultiplier = 1,
  baseSubtotal,
  toppingsCount,
  toppingPrice,
  toppingsCost,
  total,
  submitting,
  canSubmit,
  submitError,
}) {
  const fmt = (n) => (Number.isFinite(n) ? n.toFixed(2) : '0.00')

  return (
    <aside className="summary-box" data-testid="summary">
      <h3 className="summary-title">Sipariş Toplamı</h3>

      <div className="row">
        <span>Baz Fiyat</span>
        <strong>{fmt(basePrice)}₺</strong>
      </div>

      <div className="row muted">
        <span>Boyut {sizeLabel ? `(${sizeLabel})` : ''}</span>
        <span>x{fmt(sizeMultiplier)}</span>
      </div>

      <div className="row muted">
        <span>Hamur {doughLabel ? `(${doughLabel})` : ''}</span>
        <span>x{fmt(doughMultiplier)}</span>
      </div>

      <div className="row">
        <span>Ara Toplam</span>
        <strong>{fmt(baseSubtotal)}₺</strong>
      </div>

      <div className="row">
        <span>Seçimler</span>
        <strong>{fmt(toppingsCost || (toppingsCount * toppingPrice))}₺</strong>
      </div>

      <div className="row total" data-testid="total-row">
        <span>Toplam</span>
        <strong data-testid="total-amount">{fmt(total)}₺</strong>
      </div>

      {submitError && (
        <div className="error" role="alert" data-testid="submit-error">
          {submitError}
        </div>
      )}

      <button type="submit" className="submit" disabled={!canSubmit || submitting} data-testid="submit-button">
        {submitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
      </button>
    </aside>
  )
}
