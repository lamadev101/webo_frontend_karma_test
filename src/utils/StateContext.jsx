import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

const StateContext = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  const darkStyle =()=> {
    if(darkMode){
      const dark1 = {backgroundColor: "#111"}
      const dark2 = {background: "#111", boxShadow: "0 0 5px #111"}
      const dark3 = {background: "#222", color: "#d3d2d2"}
      const dark4 = {background: "#023849"}
      const dark5 = {background: "#ffffff7c"}
      const dark6 = {color: "#d3d2d2"}
      const dark7 = {border: "1px solid white"}
      const dark8 = {background: "linear-gradient(292.12deg, #065f7f -35.02%, #021e29 78.96%)"}
      const dark9 = {color: "#222"}
      return [dark1, dark2, dark3, dark4, dark5, dark6, dark7, dark8, dark9];
    }
    return ""
  }
  const dark = darkStyle();

  return (
    <Context.Provider value={{dark, darkMode, setDarkMode}}>
      {children}
    </Context.Provider>
  )
}

export default StateContext;
export const useStateContext = ()=> useContext(Context);