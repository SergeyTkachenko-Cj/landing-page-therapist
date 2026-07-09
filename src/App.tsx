import React from "react";
import Form from "./components/Form";
import Diagnosis from "./components/Diagnosis";
import Header from "./components/Header";
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);      

  return (
    <div className="container">
        <h1>{count}</h1>
        <Header />
        <Form func={setCount} />
        <Diagnosis />
    </div>
  );
}

export default App;
