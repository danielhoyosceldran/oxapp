import { useAuth } from './auth/AuthProvider'

import Chat from './pages/p-chat';
import LandingPage from './pages/p-landingPage.jsx';

function App() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Chat /> : <LandingPage />;
}

export default App
