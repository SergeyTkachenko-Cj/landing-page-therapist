import React from "react";
import Form from "./components/Form";
import Diagnosis from "./components/Diagnosis";
import Header from "./components/Header";
import './App.css';

function App() {
  const [inpt, setInpt] = React.useState("");  
  const [box, setBox] = React.useState<string[]>([]);    

  return (
    <div className="container">
        <h1>Input:{inpt}</h1>
        <h1>Checkbox:{box}</h1>
        <Header />
        <Form func={setInpt} funcTwo={setBox} />
        <Diagnosis />
    </div>
  );
}

export default App;
