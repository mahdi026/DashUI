import React from "react";
import "./App.css";
import Account from "./components/pages/Account";
import Buttondarkmode from "./components/atoms/Buttondarkmode.atom";

function App() {
  return (
    <div className="dark:bg-bgbody bg-[#f4f6f8] ">
      <Buttondarkmode />
      <Account />
    </div>
  );
}

export default App;
