import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});


export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
