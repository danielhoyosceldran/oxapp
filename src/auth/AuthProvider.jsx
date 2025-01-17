    import { useContext, createContext, useState, useEffect } from "react";
    import { blankRequest } from "../api_handlers/session";
    import { API_URL, LOGGED_IN } from "../api_handlers/consts";

    const AuthContext = createContext({
        isAuthenticated: false,
        setIsAuthenticated: () => {},
    });

    export function AuthProvider({children}) {
        useEffect(() => {
            console.log("AuthProvider mounted");
        }, []);
        
        const [isAuthenticated, setIsAuthenticated] = useState(LOGGED_IN);

        async function saveUser() {
            await setIsAuthenticated(await blankRequest());
        }

        return (
            <AuthContext.Provider value={{ isAuthenticated, saveUser }}>
                {children}
            </AuthContext.Provider>
        );
    }

    export const useAuth = () => useContext(AuthContext);
