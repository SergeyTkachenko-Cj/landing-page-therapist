type Func = {
    func: React.Dispatch<React.SetStateAction<number>>;
}

function Form(prop: Func) {

    const {func} = prop;

    function increment() {
        func(prev => prev + 1)
    }

    return (
        <>
            <section className="input-section">
              <input
                  type="url"
                  placeholder="https://your-startup.com"
              />
            </section>

            <section className="diagnose">
              <button onClick={increment}>Diagnose My Mental State</button>
            </section>
        </>
    )
}

export default Form;