import React, {useState} from "react";
import Counter from "./Components/Counter";



function App() {
  const  [value, setValue] = useState('Input text');

  return (
    <div className="App">
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
