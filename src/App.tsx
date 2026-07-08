import './App.css';

function App() {
  return (
    <div className="container">
      <header>
          <h1>🧠 Landing Page Therapist</h1>
          <p>
              Paste your landing pages below.
              We'll diagnose what's wrong with <strong>you</strong>,
              not your website.
          </p>
      </header>

      <section className="input-section">
          <input
              type="text"
              placeholder="https://your-startup.com"
          />
          <button>Add</button>
      </section>

      <section className="evidence">
          <h2>Psychological Evidence</h2>
          <ul>
              <li>
                  https://startup.com
                  <button>✕</button>
              </li>
              <li>
                  https://another.ai
                  <button>✕</button>
              </li>
          </ul>
      </section>

      <section className="diagnose">
          <button>
              Diagnose My Mental State
          </button>
      </section>

      <section className="results">
          <h2>Diagnosis</h2>
          <div className="result-box">
              AI report appears here...
          </div>
      </section>
    </div>
  );
}

export default App;
