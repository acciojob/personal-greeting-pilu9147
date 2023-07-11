
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
          <p>Enter your name:</p>
        <input type="text" onChange={dis} value={text}/>
        <p>Hello { text}!</p>
    </div>
  )
}

export default App
