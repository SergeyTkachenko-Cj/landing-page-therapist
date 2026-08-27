import React from "react"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import Header from "./components/Header"
import './App.css'

function App() {
  const [impt, setInpt] = React.useState("")
  const [showDiagnosis, setShowDiagnosis] = React.useState(false)

  return (
    <div className="container">
        <Header />
        <Form imput={setInpt} diagnosis={setShowDiagnosis}/>
        {showDiagnosis && <Diagnosis imput={impt} />}
    </div>
  );
}

export default App
