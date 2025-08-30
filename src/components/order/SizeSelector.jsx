import './SizeSelector.css'

export default function SizeSelector({ value, onChange }) {
  return (
    <fieldset className="size-selector">
      <legend>Boyut Seç</legend>

      <label className="radio">
        <input
          type="radio"
          name="boyut"
          value="Kucuk"
          checked={value === 'Kucuk'}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <span className="radiomark" aria-hidden="true" />
        <span className="label-text">Küçük</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="boyut"
          value="Orta"
          checked={value === 'Orta'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="radiomark" aria-hidden="true" />
        <span className="label-text">Orta</span>
      </label>

      <label className="radio">
        <input
          type="radio"
          name="boyut"
          value="Buyuk"
          checked={value === 'Buyuk'}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="radiomark" aria-hidden="true" />
        <span className="label-text">Büyük</span>
      </label>
    </fieldset>
  )
}
