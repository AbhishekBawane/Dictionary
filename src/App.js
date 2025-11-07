import React, { useState } from "react";

function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{  margin: "40px"  }}>
      <h1 style={{fontSize: "40px"}}>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>

    
        <div style={{ marginTop: "20px" }}>
           <h3 style={{fontWeight: '600'}}>Definition:</h3>
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <p>{definition}</p>
            </>
          )}
        </div>
    
    </div>
  );
}

export default App;
