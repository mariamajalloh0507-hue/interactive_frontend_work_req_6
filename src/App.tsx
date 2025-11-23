import { useState, useEffect } from "react";
import funFacts from "./translations.json";
import LanguageSelector from "./components/LanguageSelector";
import FunFact from "./components/FunFact";

type Translations = {
  [lang: string]: {
    funFacts: { text: string }[];
  };
};

const data = funFacts as unknown as Translations;

function App() {
  const [language, setLanguage] = useState("en");
  const [index, setIndex] = useState(0); // new state for current fun fact
  const facts = data[language].funFacts;

  // Pick a random fun fact whenever the language changes
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setIndex(randomIndex);
  }, [language]);

  return (
    <main>
      <h1>🌍 Translated Fun Fact App</h1>

      <LanguageSelector language={language} onChange={setLanguage} />

      <section aria-label="fun fact display">
        <FunFact text={facts[index].text} />
      </section>
    </main>
  );
}

export default App;