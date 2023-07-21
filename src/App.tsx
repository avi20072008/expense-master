import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2> Expense Tracker</h2>
      <br />
      <ExpenseApp></ExpenseApp>
    </div>
  );
}

export default App;
