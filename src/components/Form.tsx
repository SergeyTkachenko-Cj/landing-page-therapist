type Func = {
    input: string,
    setInput: React.Dispatch<React.SetStateAction<string>>
    diagnosis: React.Dispatch<React.SetStateAction<boolean>>
}

function Form(prop: Func) {

    const {input, setInput, diagnosis} = prop

    function formSubmit(formData: FormData) {
        const singleInputData = Object.fromEntries(formData)
        const boxes = formData.getAll("domains").filter(
          (value): value is string => typeof value === "string"
        )

        type AllData = {
            input: string,
            radios: string,
            dropdowns: string,
            boxes: string[]
        }

        const allData: AllData = {
            ...singleInputData,
            boxes
        } as AllData
        
        if (typeof allData.input === "string") setInput(allData.input)
        diagnosis(prev => prev ? prev : !prev)
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
              <button className="diagnose" disabled={input === ""}>diagnose</button>
            </form>
        </>
    )
}

export default Form