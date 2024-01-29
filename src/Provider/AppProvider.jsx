import React from 'react'
import ThemeContextProvider from '../context/ThemeContext'
function AppProvider({children}) {
  return (
    <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
  )
}

export default AppProvider