import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import desktopBg from "./images/desktop_bg_loop.mp4"
import mobileBg from "./images/mobile_bg_loop.mp4"
import desktopPoster from "./images/desktop_bg.png"
import mobilePoster from "./images/mobile_bg.png"
import './App.css'

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
      poster={desktopPoster}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
    <video
      className="bg-video bg-video--mobile"
      src={mobileBg}
      poster={mobilePoster}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
    />
    <div className="container">
      <div className="viewport-gate">
        <div className="viewport-gate__card">
          <div className="viewport-gate__body">Your screen is too small to display this app properly</div>
        </div>
      </div>
        <Header />
        <Form 
          input = {inpt} 
          diagnosisBlockShow = {setShowDiagnosis} 
          aiResponse = {setAiResponseShown}
          setLoaderShown = {setLoaderShown}
          loaderShown = {loaderShown} 
          setInput = {setInpt} 
        />
          {showDiagnosis && 
          <div className="diagnosis-section glass-panel">
            <Diagnosis ai = {aiResponseShown} loader = {loaderShown} />
          </div>
          }
    </div>
    </>
  );
}

export default App
