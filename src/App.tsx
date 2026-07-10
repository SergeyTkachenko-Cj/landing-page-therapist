import React from "react";
import Form from "./components/Form";
import Diagnosis from "./components/Diagnosis";
import Header from "./components/Header";
import './App.css';

function App() {
  const [inpt, setInpt] = React.useState("");      

  return (
    <div className="container">
        <h1>{inpt}</h1>
        <Header />
        <Form func={setInpt} />
        <Diagnosis />
    </div>
  );
}

export default App;
