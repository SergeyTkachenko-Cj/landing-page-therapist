import { ReactComponent as HeadIcon } from "../images/mental-disorder.svg"
import React from "react"
import ReactMarkdown from "react-markdown"

type DiagnosisProps = {
    ai: string
    loader: boolean
    scroll: React.RefObject<HTMLDivElement | null>
}

function Diagnosis(prop: DiagnosisProps) {
    const {ai, loader, scroll} = prop

    React.useEffect(() => {
      if (loader || !ai) return
      scroll.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [ai, loader, scroll])

    return (
      loader ? 
        <div className="ai-loader" role="status" aria-live="polite" aria-busy="true">
          <p className="ai-loader__label">Consulting Skynet...</p>
          <div className="ai-loader__track">
            <div className="ai-loader__bar" /></div>
        </div> 
      : 
        <div className="diagnosis-box rise-in">
            {ai !== "" && (
              <>
                <HeadIcon className="head-icon" aria-hidden="true" />
                <h2>Diagnosis</h2>
              </>
            )}
          <ReactMarkdown>{ai}</ReactMarkdown>
        </div>
    )
}

export default Diagnosis
