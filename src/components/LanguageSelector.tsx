type Props = {
  language: string;
  onChange: (lang: string) => void;
};

export default function LanguageSelector({ language, onChange }: Props) {
  return (
    <div>
      <label htmlFor="language-select">Choose language:</label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="no">Norsk</option>
      </select>
    </div>
  );
}