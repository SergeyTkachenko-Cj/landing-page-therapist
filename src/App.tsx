import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import Websites from "./components/Websites"
import './App.css'
import desktopBg from "./images/desktop_bg_loop.mp4"
import mobileBg from "./images/mobile_bg_loop.mp4"

function App() {
  const [inpt, setInpt] = React.useState("")
  const [websites, setWebsites] = React.useState<{id: string, url: string}[]>([])
  const [showWebsites, setShowWebsites] = React.useState(false)
  const [showDiagnosis, setShowDiagnosis] = React.useState(false)
  const [aiResponseShown, setAiResponseShown] = React.useState("")
  const [loaderShown, setLoaderShown] = React.useState(false)

  return (
    <>
    <video
      className="bg-video bg-video--desktop"
      src={desktopBg}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
    <video
      className="bg-video bg-video--mobile"
      src={mobileBg}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
    <div className="container">
        <Header />
        <Form 
          input = {inpt} 
          sites = {websites}
          setSites = {setWebsites}
          setInput = {setInpt} 
          showWebsites = {setShowWebsites}
        />
        {showWebsites && <Websites 
          sites = {websites} 
          diagnosisBlockShow = {setShowDiagnosis} 
          aiResponse = {setAiResponseShown}
          loaderShown = {loaderShown} 
          setLoaderShown = {setLoaderShown}
        />}
        {showDiagnosis && <Diagnosis ai = {aiResponseShown} loader = {loaderShown} />}
    </div>
    </>
  );
}

export default App
