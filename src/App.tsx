import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import Websites from "./components/Websites"
import './App.css'

function App() {
  const [inpt, setInpt] = React.useState("")
  const [websites, setWebsites] = React.useState<{id: string, url: string}[]>([])
  const [showWebsites, setShowWebsites] = React.useState(false)
  const [showDiagnosis, setShowDiagnosis] = React.useState(false)

  return (
    <div className="container">
        <Header />
        <Form 
          input={inpt} 
          sites={websites}
          setSites={setWebsites}
          setInput={setInpt} 
          showWebsites={setShowWebsites}
          diagnosis={setShowDiagnosis}
        />
        {showWebsites && <Websites sites={websites} />}
        {showDiagnosis && <Diagnosis sites={websites} />}
    </div>
  );
}

export default App
