import { useEffect, useState } from "react";
import { ChaiOrder } from "./ChaiOrder";

export function App() {
  const [message, setgMessage] = useState("Loading...");

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((data) => setgMessage(data.message))
      .catch(() => setgMessage("Failed to fetch"));
  }, []);
  return (
    <div>
      <h1>Welcome to chaicode</h1>
      <p>Serving hot chai with react</p>
      <h3>{message}</h3>
      <ChaiOrder/>
    </div>
  );
}
