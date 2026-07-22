import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConverter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello");
  };

  const incrementAndSayHello = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (message: string) => {
    alert(message);
  };

  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    alert("I was clicked");
  };

  return (
    <div>
      <h1>Event Examples</h1>

      <h2>Counter: {count}</h2>

      <button onClick={incrementAndSayHello}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => sayWelcome("welcome")}>Say Welcome</button>
      <button onClick={handlePress}>OnPress</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;