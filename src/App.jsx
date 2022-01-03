import React, { useState } from "react";
import Books from "./Components/Books";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("");

  return (
    <div className="App">
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="he">Hebrew</option>
        <option value="en">English</option>
      </select>
      <br />
      {language}
      <Books language={language} />
      <br />
    </div>
  );
}

export default App;
