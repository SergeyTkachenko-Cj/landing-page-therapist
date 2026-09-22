import React from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Diagnosis from "./components/Diagnosis"
import './App.css'
import desktopBg from "./images/desktop_bg_loop.mp4"
import mobileBg from "./images/mobile_bg_loop.mp4"

const strng = `## Chronic Orthographic Amnesia

### What your domains reveal
- theremembery.com already misplaced the letters in "memory," then asked the internet to trust it with recall.
- The .com ending says "I am a serious product"; the spelling says "I typed this at 2am and shipped it anyway."
- "there" + "membery" sounds like a support group for people who remember joining, not what they joined.

### Personality Profile
- You brand yourself as the keeper of memories on theremembery.com while actively forgetting how English works.
- You confuse "clever portmanteau" with "typo that survived review."
- You want theremembery.com to feel intimate and human; it feels like autocorrect lost a fight.
- You name products after cognitive functions you personally lack.

### Observed Symptoms
- Compulsive attachment to theremembery.com despite the built-in spelling wound.
- Belief that a broken word on theremembery.com is "quirky positioning."
- Refusal to admit theremembery.com is just "the remembery" with a hangover.
- Treating the domain like a thesis when it's a typo with DNS.

### Recommended Treatment
Delete the fantasy that theremembery.com sounds premium. Either spell "memory" like an adult or lean all the way into the joke and stop pretending this was intentional strategy. Until then, every visitor gets the same diagnosis you just did: your brand remembers everything except the alphabet.`;

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
