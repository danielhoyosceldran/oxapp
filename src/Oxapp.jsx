import { useAuth } from './auth/AuthProvider'

import Chat from './pages/p-chat';
import LandingPage from './pages/p-landingPage.jsx';
import { UserProvider } from './user/userProvider.jsx';

function App() {
  const auth = useAuth();
  return auth.isAuthenticated
    ? <UserProvider><Chat /></UserProvider>
    : <LandingPage />;
}

export default App
