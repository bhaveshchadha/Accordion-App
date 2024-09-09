import { useState } from "react";
import Accordions from "./components/Accordions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Accordions />
    </>
  );
}

export default App;
