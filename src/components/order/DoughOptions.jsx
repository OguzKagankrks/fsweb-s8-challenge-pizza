export default function DoughOptions({ value, onChange }) {
  return (
    <div className="dough-options">
      <label htmlFor="hamur">Hamur Seç</label>
      <select
        id="hamur"
        name="hamur"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Hamur Kalınlığı</option>
        <option value="Ince">İnce</option>
        <option value="Orta">Orta</option>
        <option value="Kalin">Kalın</option>
      </select>
    </div>
  );
}
