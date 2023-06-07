import { createContext, useEffect, useState } from "react";
//create
export const AppContext = createContext();

//provide

const initialDarkTheme = () => {
  const preferDarkMode = window.matchMedia(
    `(prefers-color-scheme: dark)`
  ).matches;
  console.log(localStorage.getItem("darkTheme"));
  return preferDarkMode;
};

export const AppContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialDarkTheme());
  const [searchImages, setSearchImages] = useState("tiger");
  const darkTheme = () => {
    let newDark = !isDarkTheme;
    setIsDarkTheme(newDark);
    localStorage.setItem('darkTheme',newDark)
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, darkTheme, searchImages, setSearchImages }}
    >
      {children}
    </AppContext.Provider>
  );
};
