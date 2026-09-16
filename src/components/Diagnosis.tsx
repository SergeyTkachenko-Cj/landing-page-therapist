import ReactMarkdown from "react-markdown"

type DiagnosisProps = {
    ai: string
}

function Diagnosis(prop: DiagnosisProps) {
    const aiResponse = prop.ai

    return (
      <section className="diagnosis">
          <h2>Diagnosis:</h2>
          <div className="diagnosis-box">
            <ReactMarkdown>{aiResponse}</ReactMarkdown>
          </div>
      </section>
    )
}

export default Diagnosis