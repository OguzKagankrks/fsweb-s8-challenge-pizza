import './ToppingsSelector.css'

export default function ToppingsSelector({
  toppings,
  onToggle,
  min = 4,
  max = 10,
  error,
}) {
  const OPTIONS = [
    { key: 'pepperoni', label: 'Pepperoni' },
    { key: 'sosis', label: 'Sosis' },
    { key: 'sucuk', label: 'Sucuk' },
    { key: 'domates', label: 'Domates' },
    { key: 'biber', label: 'Biber' },
    { key: 'misir', label: 'Mısır' },
    { key: 'zeytin', label: 'Zeytin' },
    { key: 'mantar', label: 'Mantar' },
    { key: 'ananas', label: 'Ananas' },
    { key: 'sogan', label: 'Soğan' },
    { key: 'sarimsak', label: 'Sarımsak' },
    { key: 'jalapeno', label: 'Jalapeno' },
  ];

  const count = Object.values(toppings).filter(Boolean).length;

  return (
    <fieldset className="toppings-selector">
      <legend>Ek Malzemeler</legend>

      {OPTIONS.map((opt) => {
        const disabled = !toppings[opt.key] && count >= max
        return (
          <label key={opt.key} className={`checkbox ${disabled ? 'disabled' : ''}`}>
            <input
              type="checkbox"
              name={opt.key}
              checked={!!toppings[opt.key]}
              onChange={(e) => onToggle(opt.key, e.target.checked)}
              disabled={disabled}
            />
            <span className="checkmark" aria-hidden="true" />
            <span className="label-text">{opt.label}</span>
          </label>
        )
      })}

      <div className="toppings-hint" aria-live="polite">
        Seçili: {count} (min {min}, max {max}) {error ? ' - ' + error : ''}
      </div>
    </fieldset>
  );
}
