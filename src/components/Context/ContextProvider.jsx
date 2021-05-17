import React, { useState } from "react"
import ThemeContext, { themes } from "./ThemeContext"

const ContextProvider = (props) => {
  const [themeState, setThemeState] = useState(themes.light)
  const changeTheme = () => {
    setThemeState(themeState === themes.dark ? themes.light : themes.dark)
  }
  return (
    <ThemeContext.Provider value={{ themeState, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ContextProvider
