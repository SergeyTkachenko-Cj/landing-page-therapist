type WebsitesProps = {
    sites: {id: string, url: string}[]
}

function Websites(prop: WebsitesProps) {
    const inptList = prop.sites

    return (
        <>
        <h2>Websites:</h2>
            <ul>
                {inptList.map(i => <li key={i.id}>{i.url}</li>)}
            </ul>
        </>
    )
}

export default Websites