import { useContext, createContext, useState } from "react";
import { API_URL, LOGGED_IN } from "../api_handlers/consts";

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});


export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(LOGGED_IN);

    async function saveUser() {
        const response = await fetch(API_URL + "/", {
            method: "GET",
            credentials: "include"
        });
        const responseData = await response.json();
        setIsAuthenticated(responseData["status"]);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
