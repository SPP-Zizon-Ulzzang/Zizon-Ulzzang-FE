import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import ThemeProvider from './styles/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
