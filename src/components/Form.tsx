type Func = {
    func: React.Dispatch<React.SetStateAction<string>>;
}

function Form(prop: Func) {

    const {func} = prop;

    function formSubmit(formData: FormData) {
        const input = formData.get("input");
        if (typeof(input) === "string") func(input);
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
              />
              <button>diagnose</button>
            </form>

            {/* <section className="diagnose">
              <button>Diagnose My Mental State</button>
            </section> */}
        </>
    )
}

export default Form;