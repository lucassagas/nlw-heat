import { ReactNode, useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { dark } from '../styles/themes'
interface HooksProps {
  children: ReactNode
}

export default function AppProvider({ children }: HooksProps): JSX.Element {
  const [theme] = useState<DefaultTheme>(dark)

  return (
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  )
}
