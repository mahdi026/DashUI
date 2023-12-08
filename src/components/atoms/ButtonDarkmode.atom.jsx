import { useState, useEffect } from "react";
import Iconoff from "./Iconoff.atom";
import Iconon from "./Iconon.atom";

function Buttondarkmode() {
  const [theme, setTheme] = useState("light");
  const [logo, setLogo] = useState(<Iconoff />);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      setLogo(<Iconon />);
    } else {
      document.documentElement.classList.remove("dark");
      setLogo(<Iconoff />);
    }
  }, [theme]);

  const handellswichtheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        onClick={handellswichtheme}
        className="ml-[50rem] bg-[#792fa749] p-3 rounded-full"
      >
        {" "}
        {logo}
      </button>
    </div>
  );
}

export default Buttondarkmode;
