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

// 포트 : "dev": "vite --host 172.20.10.7 --port 4002",
