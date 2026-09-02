type Func = {
    input: string,
    sites: {id: string, url: string}[],
    setInput: React.Dispatch<React.SetStateAction<string>>,
    setSites: React.Dispatch<React.SetStateAction<{id: string, url: string}[]>>,
    showWebsites: React.Dispatch<React.SetStateAction<boolean>>,
    diagnosis: React.Dispatch<React.SetStateAction<boolean>>
}

function Form(prop: Func) {

    const {input, setInput, setSites, showWebsites, diagnosis} = prop

    function formSubmit(formData: FormData) {
        type AllData = {
            input: string
        }

        const inputValue = formData.get("input")

        const allData: AllData = {
            input: typeof inputValue === "string" ? inputValue : ""
        }

        if (!allData.input.trim()) return
        
        setInput(allData.input)
        setSites(prev => [...prev, {id: crypto.randomUUID(), url: allData.input}])
        showWebsites(prev => prev ? prev : !prev)
        diagnosis(prev => prev ? prev : !prev)
        setInput("")
    }

    return (
        <>
            <form 
            className="input-section" 
            action={formSubmit} >
              <label className="visually-hidden" htmlFor="input">your website</label>
              <input
                  onChange={e => setInput(e.target.value)}
                  type="text"
                  name="input"
                  id="input"
                  placeholder="your-startup.com"
                  value={input}
              />
              <button className="add-website" disabled={input === ""}>add</button>
            </form>
        </>
    )
}

export default Form