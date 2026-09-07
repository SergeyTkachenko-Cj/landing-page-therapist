type WebsitesProps = {
    sites: {id: string, url: string}[]
    diagnosisBlockShow: React.Dispatch<React.SetStateAction<boolean>>
    aiResponse: React.Dispatch<React.SetStateAction<boolean>>
}

function Websites(prop: WebsitesProps) {
    const {sites, diagnosisBlockShow, aiResponse} = prop

    function getDiagnosis() {
        aiResponse(prev => !prev)
        diagnosisBlockShow(true)
    }

    return (
        <>
        <h2>Your websites:</h2>
            <ul>
                {sites.map(i => <li key={i.id}>{i.url}</li>)}
            </ul>
        {sites && <div className="diagnosis-btn-block">
            <div>
                <h3>Ready to hear your diagnosis?</h3>
                <span>Generate your psychological portrait based on the websites</span>
            </div>
            <button onClick={getDiagnosis}>Get diagnosed</button>
        </div>}
        </>
    )
}

export default Websites