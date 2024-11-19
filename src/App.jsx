import './styles/global/App.css'
import { Header } from './components/Header'
import { MainTitle } from './components/MainTitle'
import { useAuth } from './auth/AuthProvider'
import Xat from './rutes/xat';

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Xat />
  : (
    <>
      <Header />
      <MainTitle />
    </>
  );
}

export default App
