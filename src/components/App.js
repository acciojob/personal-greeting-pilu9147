import React, { useState } from "react";
import './../styles/App.css';


const App =   ()=>{
  let [text,uptext] = useState('')
  let dis = (e)=>{
  uptext(e.target.value)
  }
  return (
    <div>
        Enter your name: <br/>
        <input type="text" onChange={dis} value={text}/> <br/>
        Hello { text}!
    </div>
  )
}

export default App
