import ThemeProvider from './theme';
// routes
import Router from './routes';
// components
import ScrollToTop from './components/micro/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <NotistackProvider> */}
        <AuthProvider>
          {/* <Settings /> */}
          <ScrollToTop />
          <Router />
        </AuthProvider>
        {/* </NotistackProvider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
