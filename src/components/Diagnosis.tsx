import AiDiagnosis from "../AI-diagnosis"

type DiagnosisProps = {
    ai: boolean
}

function Diagnosis(prop: DiagnosisProps) {
    const aiResponse = prop.ai

    return (
        <section className="diagnosis">
          <h2>Diagnosis:</h2>
          <div className="diagnosis-box">
              {aiResponse ? <AiDiagnosis /> : "AI health report appears here..."}
          </div>
      </section>
    )
}

export default Diagnosis