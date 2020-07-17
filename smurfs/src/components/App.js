import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from 'axios';
import SmurfList from './SmurfList'


export const SmurfContext = createContext();
console.log("SmurfContext", SmurfContext)

const initialSmurfs = []
function App() {
  const [smurfs, setSmurfs] = useState(initialSmurfs)

  useEffect (() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurfs(res.data)
        console.log("App -> res.data", res.data)
        
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  console.log("App -> smurfs", smurfs)


  return (

    <div className="App">
      <SmurfContext.Provider 
        value={{ smurfs }}
      >
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );
}


export default App;
