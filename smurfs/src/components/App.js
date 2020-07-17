import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import axios from 'axios';
import SmurfList from './SmurfList'
import Form from './Form'


export const SmurfContext = createContext();
console.log("SmurfContext", SmurfContext)

const initialFormValues = {
  name: '',
  age: '',
  height: '',
}




const initialSmurfs = []
function App() {
  const [smurfs, setSmurfs] = useState(initialSmurfs)
  const [formValues, setFormValues] = useState(initialFormValues)


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

  const addSmurf = newSmurf => {
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        setSmurfs([...smurfs, res.data])
        console.log("App -> smurfs", smurfs)
      })
      .catch(err => {
      console.log("App -> err", err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newSmurf = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      height: formValues.height.trim(),
    }
    addSmurf(newSmurf)
  }

  const onInputChange = evt => {
    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

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
        <Form 
          values={formValues}
          onInputChange={onInputChange}
          onSubmit={onSubmit}

          
        />
      </SmurfContext.Provider>
    </div>
  );
}


export default App;
