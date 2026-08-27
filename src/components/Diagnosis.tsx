type DiagnosisProps = {
    imput: string
}

function Diagnosis(prop: DiagnosisProps) {

    const {imput} = prop

    console.log(`user's imput: ${imput}`)

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