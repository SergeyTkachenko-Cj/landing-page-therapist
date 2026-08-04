type Func = {
    func: React.Dispatch<React.SetStateAction<string>>;
    funcTwo: React.Dispatch<React.SetStateAction<string[]>>;
};

function Form(prop: Func) {

    const {func, funcTwo} = prop;

    function formSubmit(formData: FormData) {
        const input = formData.get("input");
        const boxes = formData.getAll("domains").filter(
          (value): value is string => typeof value === "string"
        );
        
        if (typeof input === "string") func(input);
        funcTwo(boxes);
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
              <button>diagnose</button>

              <fieldset className="checkboxes">
                <legend>How many domains do you own?</legend>
                <label>
                    <input type="checkbox" value="from 0 to 10" name="domains" />
                from 0 to 10
                </label>
                <label>
                    <input type="checkbox" value="from 0 to 10" name="domains" />
                from 10 to 20
                </label>
                <label>
                    <input type="checkbox" value="from 0 to 10" name="domains" />
                from 20 to 50
                </label>
                <label>
                    <input type="checkbox" value="from 0 to 10" name="domains" />
                from 50 to ♾️
                </label>
              </fieldset>
            </form>

            {/* <section className="diagnose">
              <button>Diagnose My Mental State</button>
            </section> */}
        </>
    )
}

export default Form;