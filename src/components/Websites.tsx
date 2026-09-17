import { getDiagnosisFromMistral } from "../ai.js"

type WebsitesProps = {
    sites: {id: string, url: string}[]
    diagnosisBlockShow: React.Dispatch<React.SetStateAction<boolean>>
    aiResponse: React.Dispatch<React.SetStateAction<string>>
    loaderShown: boolean
    setLoaderShown: React.Dispatch<React.SetStateAction<boolean>>
}

function Websites(prop: WebsitesProps) {
    const {sites, diagnosisBlockShow, aiResponse, loaderShown, setLoaderShown} = prop

    function getDiagnosis() {
        aiResponse("")
        diagnosisBlockShow(true)
        setLoaderShown(true)
        getDiagnosisFromMistral(sites.map(s => s.url)).then(result => {
            if (!result) {
                return
            }
            aiResponse(result)
        }).finally(() => setLoaderShown(false))
    }

    return (
        <>
            <h2 className="your-websites-heading">Your websites:</h2>
                <ul>
                    {sites.map(i => <li key={i.id}>{i.url}</li>)}
                </ul>
            <div className="diagnosis-btn-block">
                <div>
                    <h3>Ready to hear your diagnosis?</h3>
                    <span>Generate your psychological portrait based on the websites</span>
                </div>
                <button className="get-ai-diagnosis" onClick={getDiagnosis} disabled={loaderShown}>Get diagnosed</button>
            </div>
        </>
    )
}

export default Websites