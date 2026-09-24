import { useRef  } from "react"
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

    const inAction = useRef(false) // prevents extra API requests

    function formSubmit(formData: FormData) {
        type AllData = { input: string }
        const inputValue = formData.get("input")
        const allData: AllData = {
            input: typeof inputValue === "string" ? inputValue : ""
        }
        if (!allData.input.trim() || loaderShown || inAction.current) return  
        
        inAction.current = true

        setInput(allData.input)
        aiResponse("")
        diagnosisBlockShow(true)
        setLoaderShown(true)
        
        getDiagnosisFromMistral(allData.input).then(result => {
            aiResponse(result || "Ooops, looks like our robo-gods are not in the mood")
        }).finally(() => {
            inAction.current = false
            setLoaderShown(false)
        })
    }

    function erase() { setInput("") }

    return (
        <div className="input-bar glass-panel rise-in rise-in--delay-2">
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
                <button id="cross" type="button" onClick={erase}>×</button>
              </div>
                <button className="get-ai-diagnosis" disabled={input.trim() === "" || loaderShown}>Diagnose</button>
            </form>
        </div>
    )
}

export default Form