import React, { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeToggle = () => {
  const { isDarkTheme, darkTheme } = useContext(AppContext);

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={darkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
