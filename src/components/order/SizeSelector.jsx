export default function SizeSelector({ value, onChange }) {
  return (
    <fieldset className="size-selector">
      <legend>Boyut Seç</legend>

      <label htmlFor="size-kucuk">
        <input
          id="size-kucuk"
          type="radio"
          name="boyut"
          value="Kucuk"
          checked={value === "Kucuk"}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        Küçük
      </label>

      <label htmlFor="size-orta" style={{ marginLeft: '1rem' }}>
        <input
          id="size-orta"
          type="radio"
          name="boyut"
          value="Orta"
          checked={value === "Orta"}
          onChange={(e) => onChange(e.target.value)}
        />
        Orta
      </label>

      <label htmlFor="size-buyuk" style={{ marginLeft: '1rem' }}>
        <input
          id="size-buyuk"
          type="radio"
          name="boyut"
          value="Buyuk"
          checked={value === "Buyuk"}
          onChange={(e) => onChange(e.target.value)}
        />
        Büyük
      </label>
    </fieldset>
  );
}
