type WebsitesProps = {
    sites: {id: string, url: string}[],
    diagnosis: React.Dispatch<React.SetStateAction<boolean>>
}

function Websites(prop: WebsitesProps) {
    const inptList = prop.sites
    const diagnosis = prop.diagnosis

    function getDiagnosis() {
        diagnosis(prev => prev ? prev : !prev)
    }

    return (
        <>
        <h2>Your websites:</h2>
            <ul>
                {inptList.map(i => <li key={i.id}>{i.url}</li>)}
            </ul>
        {inptList && <div className="diagnosis-btn-block">
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