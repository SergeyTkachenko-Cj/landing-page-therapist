type Func = {
    imput: React.Dispatch<React.SetStateAction<string>>
    diagnosis: React.Dispatch<React.SetStateAction<boolean>>
}

function Form(prop: Func) {

    const {imput, diagnosis} = prop

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
        
        if (typeof allData.input === "string") imput(allData.input)
        diagnosis(prev => prev ? prev : !prev)
    }

    return (
        <>
            <form 
            className="input-section" 
            action={formSubmit} >
              <label className="visually-hidden" htmlFor="input">your website</label>
              <input
                  type="text"
                  name="input"
                  id="input"
                  placeholder="your-startup.com"
                  defaultValue="datatseh.ru theremembery.com cjlogostudio.com"
              />
              <button className="diagnose">diagnose</button>
            </form>
        </>
    )
}

export default Form