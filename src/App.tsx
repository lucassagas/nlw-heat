import AppProvider from './contexts'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <AppProvider>
      <h1>hello react</h1>
      <GlobalStyles />
    </AppProvider>
  )
}

export default App
