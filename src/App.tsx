import React from "react";
import Form from "./components/Form";
import Diagnosis from "./components/Diagnosis";
import Header from "./components/Header";
import './App.css';

function App() {
  const [inpt, setInpt] = React.useState("");  
  const [box, setBox] = React.useState<string[]>([]);  
  const [radio, setRadio] = React.useState("");  
  const [dropdown, setDropdown] = React.useState("");

  return (
    <div className="container">
        <h1>Input:{inpt}</h1>
        <h1>Checkbox:{box}</h1>
        <h1>Radios:{radio}</h1>
        <h1>Drops:{dropdown}</h1>
        <Header />
        <Form func={setInpt} funcTwo={setBox} funcThree={setRadio} funcFour={setDropdown} />
        <Diagnosis />
    </div>
  );
}

export default App;
