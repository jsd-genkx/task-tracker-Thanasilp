import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormInput from "./components/FormInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex-col mx-auto justify-center items-center bg-slate-300 w-2/5">
      <Header></Header>
      <FormInput></FormInput>
    </div>
  );
}

export default App;
