# 🌍 Translated Fun Fact App

This React app displays fun facts in multiple English and Norwegian. Users can select a language, and the app shows a random fun fact in that language. The app includes accessibility features and automated tests with Vitest + React Testing Library.

## How to Run the App

1. Install dependencies:

```bash
npm install

2. Start the development server:

npm run dev

	3.	Open your browser at http://localhost:5173.

 How Translations Work
	•	All fun facts are stored in translations.json.
	•	The app reads this file and displays fun facts based on the selected language.
	•	Users can switch languages using the dropdown, and the fun fact text updates dynamically.
	•	Fun facts are randomly selected from the list for extra variety.

 How to Run Tests

This app uses Vitest and React Testing Library.
	•	Run all tests in the terminal:

npm test

	•	Run tests with a UI:

npm run test:ui

Tests verify:
	•	Initial render shows a fun fact in the default language.
	•	Switching languages updates the displayed fun fact.
	•	Semantic HTML and accessible labels are used.
	•	Translation data is read from the static JSON file.

♿ Accessibility
	•	The language selector has a clear accessible label (Choose language:).
	•	Fun facts are displayed inside a <section> with aria-label="fun fact display" for screen readers.


📝 Project Notes
	•	Built using React + TypeScript + Vite.
	•	Fun facts are structured in a JSON file for easy maintainability.
	•	Supports at least two languages and dynamically updates content.

