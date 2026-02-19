import { useState } from 'react'
import Counter from "./Components/Counter";
import Fruits from "./Components/Fruits";
import './App.css'

function HelloWorld(props) {
  return <div>
    <p>Hi {props.name}</p>
    <p>Age: {props.age}</p>

  </div>

}

function App() {


  return (
    <>
      <HelloWorld name="Kenzie" age={31} />
      <Counter />
      <Fruits />
    </>
  )
}

export default App
