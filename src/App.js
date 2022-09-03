import React, {useState} from "react";



function App() {
  const  [count, setCount] = useState(0);
  const  [value, setValue] = useState('Input text');

  function  Increment(){
    setCount(count + 1);
  }

  function  Decrement(){
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
        <h1>{value}</h1>
        <input
            type="Input text"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
      <h1></h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

    </div>
  );
}

export default App;
