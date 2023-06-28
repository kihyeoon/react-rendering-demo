import "./App.css";
import { useState } from "react";
import TabButton from "./TabButton";
import Transition from "./Transition";
import Blocking from "./Blocking";

function App() {
  const [tab, setTab] = useState("blocking");

  return (
    <div className="app">
      <TabButton
        isActive={tab === "blocking"}
        onClick={() => setTab("blocking")}
      >
        blocking
      </TabButton>
      <TabButton
        isActive={tab === "transition"}
        onClick={() => setTab("transition")}
      >
        transition
      </TabButton>
      {tab === "blocking" && <Blocking />}
      {tab === "transition" && <Transition />}
    </div>
  );
}

export default App;
