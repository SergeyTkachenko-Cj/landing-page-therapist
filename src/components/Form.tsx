import { getDiagnosisFromMistral } from "../ai.js"

type Func = {
    input: string
    setInput: React.Dispatch<React.SetStateAction<string>>
    diagnosisBlockShow: React.Dispatch<React.SetStateAction<boolean>>
    aiResponse: React.Dispatch<React.SetStateAction<string>>
    setLoaderShown: React.Dispatch<React.SetStateAction<boolean>>
    loaderShown: boolean
}

function Form(prop: Func) {
    const {input, setInput, diagnosisBlockShow, aiResponse, setLoaderShown, loaderShown} = prop

    function formSubmit(formData: FormData) {
        type AllData = { input: string }
        const inputValue = formData.get("input")
        const allData: AllData = {
            input: typeof inputValue === "string" ? inputValue : ""
        }
        if (!allData.input.trim() || loaderShown) return    
        setInput(allData.input)
        aiResponse("")
        diagnosisBlockShow(true)
        setLoaderShown(true)
        getDiagnosisFromMistral(allData.input).then(result => {
            if (!result) {
                return
            }
            aiResponse(result)
        }).finally(() => setLoaderShown(false))
    }

    function erase() { setInput("") }

    return (
        <div className="glass-panel">
            <form 
            className="input-section" 
            action={formSubmit} >
              <label className="visually-hidden" htmlFor="input">your website</label>
              <div>
                <input
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    name="input"
                    id="input"
                    placeholder="your-startup"
                    value={input}
                />
                <button id="cross" type="button" onClick={erase}>✖️</button>
              </div>
                <button className="get-ai-diagnosis" disabled={input.trim() === "" || loaderShown}>Get diagnosed</button>
            </form>
        </div>
    )
}

export default Form