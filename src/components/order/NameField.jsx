export default function NameField({ value, onChange, error }) {
  return (
    <div className="name-field">
      <label htmlFor="isim">Ad Soyad</label>
      <input
        id="isim"
        name="isim"
        type="text"
        placeholder="Adınızı ve Soyadınızı Giriniz"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        minLength={3}
      />
      {error && (
        <span className="error" style={{ color: 'red' }}>
          {error}
        </span>
      )}
    </div>
  )
}

