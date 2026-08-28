import React from "react"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import Header from "./components/Header"
import './App.css'

function App() {
  const [inpt, setInpt] = React.useState("")
  const [showDiagnosis, setShowDiagnosis] = React.useState(false)

  return (
    <div className="container">
        <Header />
        <Form input={inpt} setInput={setInpt} diagnosis={setShowDiagnosis}/>
        {showDiagnosis && <Diagnosis input={inpt} />}
    </div>
  );
}

export default App
