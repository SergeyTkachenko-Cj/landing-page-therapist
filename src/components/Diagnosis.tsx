type DiagnosisProps = {
    sites: {id: string, url: string}[]
}

function Diagnosis(prop: DiagnosisProps) {
    return (
        <section className="diagnosis">
          <h2>Diagnosis</h2>
          <div className="diagnosis-box">
              AI health report appears here...
          </div>
      </section>
    )
}

export default Diagnosis