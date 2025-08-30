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

      {OPTIONS.map((opt) => (
        <label
          key={opt.key}
          style={{ display: 'inline-block', minWidth: 160, margin: '6px 12px 6px 0' }}
        >
          <input
            type="checkbox"
            name={opt.key}
            checked={!!toppings[opt.key]}
            onChange={(e) => onToggle(opt.key, e.target.checked)}
            disabled={!toppings[opt.key] && count >= max}
          />
          {opt.label}
        </label>
      ))}

      <div style={{ marginTop: 8, fontSize: 12, color: error ? 'crimson' : '#555' }}>
        Seçili: {count} (min {min}, max {max}) {error ? ' - ' + error : ''}
      </div>
    </fieldset>
  );
}

