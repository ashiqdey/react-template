// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/micro/ScrollToTop";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
        <AuthProvider>
          {/* <Settings /> */}
          <ScrollToTop />
          <Router />
        </AuthProvider>
    </>
  );
}

export default App;
