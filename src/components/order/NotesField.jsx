export default function NotesField({ value, onChange }) {
  return (
    <div className="notes-field">
      <label htmlFor="siparis-notu">Sipariş Notu</label>
      <textarea
        id="siparis-notu"
        name="siparisNotu"
        placeholder="Siparişe eklemek istediğin bir not var mı?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        style={{ width: '100%' }}
      />
    </div>
  );
}
