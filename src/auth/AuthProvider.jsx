import { useContext, createContext, useState } from "react";
import { API_URL, LOGGED_IN } from "../consts/consts";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});


export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(LOGGED_IN);

    function saveUser() {
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
