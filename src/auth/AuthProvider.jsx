import { useContext, createContext, useState } from "react";
import { accessRequest } from "../api_handlers/session";
import { API_URL, LOGGED_IN } from "../api_handlers/consts";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(LOGGED_IN);

    async function saveUser() {
        setIsAuthenticated(await accessRequest());
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
