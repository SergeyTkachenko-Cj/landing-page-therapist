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

// const strng = `### Chronic Orthographic Amnesia

// ### What your domains reveal
// - theremembery.com already misplaced the letters in "memory," then asked the internet to trust it with recall.
// - The .com ending says "I am a serious product"; the spelling says "I typed this at 2am and shipped it anyway."
// - "there" + "membery" sounds like a support group for people who remember joining, not what they joined.

// ### Personality Profile
// - You brand yourself as the keeper of memories on theremembery.com while actively forgetting how English works.
// - You confuse "clever portmanteau" with "typo that survived review."
// - You want theremembery.com to feel intimate and human; it feels like autocorrect lost a fight.
// - You name products after cognitive functions you personally lack.

// ### Observed Symptoms
// - Compulsive attachment to theremembery.com despite the built-in spelling wound.
// - Belief that a broken word on theremembery.com is "quirky positioning."
// - Refusal to admit theremembery.com is just "the remembery" with a hangover.
// - Treating the domain like a thesis when it's a typo with DNS.

// ### Recommended Treatment
// Delete the fantasy that theremembery.com sounds premium. Either spell "memory" like an adult or lean all the way into the joke and stop pretending this was intentional strategy. Until then, every visitor gets the same diagnosis you just did: your brand remembers everything except the alphabet.`;

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
        
            // setTimeout(() => { 
            //     aiResponse(strng)
            //     inAction.current = false
            //     setLoaderShown(false)
            // }, 3500)

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