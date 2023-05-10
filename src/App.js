import './App.css';
import { useState } from 'react';

function NumInput({ value, setValue }) {
  return (
  <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
  );
}

function App() {
  const [input1, setInput1] = useState(0);
  const[input2, setInput2] = useState(0);
  const [op, setOp] = useState("add");
  const [answer, setAnswer] = useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Calculator App</h1>

      <NumInput 
        value={input1} 
        setValue={setInput1}/>

      <select id="operations" value={op}
       onChange={(e) => setOp(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">x</option>
        <option value="divide">/</option>
      </select>

      <NumInput
        value={input2}
        setValue={setInput2}
      />


      <button onClick={() => {
        if (!/[0-9]*/.test(input1) || !/[0-9]*/.test(input2)) {
          setAnswer("Invalid input");
        }
        else if (op === "add") {
          setAnswer(parseInt(input1) + parseInt(input2));
        } else if (op === "subtract") {
          setAnswer(input1 - input2);
        } else if (op === "multiply") {
          setAnswer(input1 * input2);
        } else if (op === "divide") {
          if (input2 !== 0) {
            setAnswer(input1 / input2);
          }
        }
      }}>=</button>
      <h1>{answer}</h1>
    </div>
  );
}


export default App;
