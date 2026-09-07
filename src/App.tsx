import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import Websites from "./components/Websites"
import './App.css'

    /**
     * Challenge:
     * 1. Create a boolean state that, for now, will represent whether
     *    we've gotten a recipe back from the "chef". Default to `false`.
     *    Can call it `recipeShown`.
     * 2. Grab the markup in recipeCode.md and paste it below. This will
     *    be a placeholder for the content that will come back from the 
     *    chef once we set up that feature.
     * 3. When the user clicks the "Get a recipe" button, flip the
     *    `recipeShown` state to true.
     * 4. Only display the recipe code content if `recipeShown` is true.
     */ 

function App() {
  const [inpt, setInpt] = React.useState("")
  const [websites, setWebsites] = React.useState<{id: string, url: string}[]>([])
  const [showWebsites, setShowWebsites] = React.useState(false)
  const [showDiagnosis, setShowDiagnosis] = React.useState(false)
  const [aiResponseShown, setAiResponseShown] = React.useState(false)

  return (
    <div className="container">
        <Header />
        <Form 
          input={inpt} 
          sites={websites}
          setSites={setWebsites}
          setInput={setInpt} 
          showWebsites={setShowWebsites}
        />
        {showWebsites && <Websites 
          sites={websites} 
          diagnosisBlockShow={setShowDiagnosis} 
          aiResponse={setAiResponseShown} 
        />}
        {showDiagnosis && <Diagnosis ai={aiResponseShown} />}
    </div>
  );
}

export default App
