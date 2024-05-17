import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter++;
    setCounter(counter);
  };

  const decreaseValue = () => {
    if(counter === 0){
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Counter in React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase value</button>
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  );
}

export default App;
