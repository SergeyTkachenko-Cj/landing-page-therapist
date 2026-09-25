import { ReactComponent as HeadIcon } from "../images/mental-disorder.svg"
import ReactMarkdown from "react-markdown"

type DiagnosisProps = {
    ai: string
    loader: boolean
}

function Diagnosis(prop: DiagnosisProps) {
    const {ai, loader} = prop

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
