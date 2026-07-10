type Func = {
    func: React.Dispatch<React.SetStateAction<string>>;
}

function Form(prop: Func) {

    const {func} = prop;

    function increment() {
        func(prev => prev + 1)
    }

    function formSubmit(e: SubmitEvent) {
        e.preventDefault();
        const input = (e.currentTarget as HTMLFormElement).elements[0] as HTMLInputElement;
        func(input.value);
    }

    return (
        <>
            <form 
            className="input-section" 
            onSubmit={e => formSubmit(e)} >
              <input
                  type="text"
                  placeholder="your-startup.com"
              />
              <button>Submit</button>
            </form>

            <section className="diagnose">
              <button onClick={increment}>Diagnose My Mental State</button>
            </section>
        </>
    )
}

export default Form;