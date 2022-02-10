import React from "react"
import { ThemeContextProvider } from "./pathToThemeProvider"

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator