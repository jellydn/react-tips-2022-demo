import { useState } from "react";
import useTilg from "tilg";

import "./App.css";
import logo from "./logo.svg";

function Counter({
  setCount,
  count,
}: {
  readonly count: number;
  readonly setCount: (count: number) => void;
}) {
  useTilg();

  return (
    <p>
      <button
        type="button"
        data-testid="increase"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <span data-testid="counter">{count}</span>
    </p>
  );
}

function App() {
  const [count, setCount] = useState(0);

  useTilg();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Counter setCount={setCount} count={count} />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
