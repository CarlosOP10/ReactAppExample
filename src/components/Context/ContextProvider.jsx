import React from "react"
import ThemeContext from "./ThemeContext"

const ContextProvider = (props) => {
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  }

  return (
    <ThemeContext.Provider value={themes.dark}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ContextProvider
