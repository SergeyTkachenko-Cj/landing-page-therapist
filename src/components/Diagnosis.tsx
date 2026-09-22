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
      <section className="diagnosis rise-in">
          <div className="diagnosis-box">
              {ai !== "" && <><img src="/images/mental-disorder.png" 
                                   alt="head icon" 
                                   className="head-icon">
                              </img>
                              <h1>Diagnosis</h1></>
              }
            <ReactMarkdown>
              {ai === "" ? "Ooops, looks like our robo-gods are not in the mood" : ai}
            </ReactMarkdown>
          </div>
      </section>
    )
}

export default Diagnosis