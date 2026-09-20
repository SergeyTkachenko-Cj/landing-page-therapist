import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import './App.css'
import desktopBg from "./images/desktop_bg_loop.mp4"
import mobileBg from "./images/mobile_bg_loop.mp4"

function App() {
  const [inpt, setInpt] = React.useState("")
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
          diagnosisBlockShow = {setShowDiagnosis} 
          aiResponse = {setAiResponseShown}
          setLoaderShown = {setLoaderShown}
          loaderShown = {loaderShown} 
          setInput = {setInpt} 
        />
        {showDiagnosis && <Diagnosis ai = {aiResponseShown} loader = {loaderShown} />}
    </div>
    </>
  );
}

export default App
