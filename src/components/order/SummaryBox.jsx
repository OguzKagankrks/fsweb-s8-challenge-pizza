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
    <aside className="summary-box" style={{
      border: '1px solid #eee',
      borderRadius: 8,
      padding: 16,
      maxWidth: 320,
    }}>
      <h3 style={{ marginTop: 0 }}>Sipariş Toplamı</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Seçimler</span>
        <strong>{selections.toFixed(2)}₺</strong>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <span>Toplam</span>
        <strong>{total.toFixed(2)}₺</strong>
      </div>

      {submitError && (
        <div style={{ color: 'crimson', fontSize: 12, marginTop: 8 }}>
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={!canSubmit || submitting}
        style={{ width: '100%', marginTop: 12 }}
      >
        {submitting ? 'Gönderiliyor...' : 'SİPARİŞ VER'}
      </button>
    </aside>
  )
}

