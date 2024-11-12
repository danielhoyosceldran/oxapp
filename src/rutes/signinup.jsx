import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from 'react-router-dom';

export default function Sign() {
    const [name_su, setName] = useState("");
    const [username_su, setUserame_su] = useState("");
    const [password_su, setPassword_su] = useState("");

    const [username_si, setUserame_si] = useState("");
    const [password_si, setPassword_si] = useState("");

    const navigate = useNavigate();

    const {isAuthenticated, setIsAuthenticated } = useAuth();
    
    function acceptSign() {
        setIsAuthenticated(true);
        navigate('/oxat');
    }

    async function signUp(event) {
        event.preventDefault(); // Evita que el formulari s'enviï per defecte
        console.log("hello world");

        // Dades que enviarem en el cos de la petició
        const data = {
            name: name_su,
            username: username_su,
            password: password_su
        };

        try {
            const response = await fetch("http://localhost:8081/users/signup_user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("Usuari registrat correctament");
                acceptSign();
            } else {
                console.log("Error en registrar l'usuari");
            }
        } catch (error) {
            console.error("Hi ha hagut un error:", error);
        }
    }

    async function signIn(event) {
        event.preventDefault(); // Evita que el formulari s'enviï per defecte
        console.log("hello world");

        // Dades que enviarem en el cos de la petició
        const data = {
            username: username_si,
            password: password_si
        };

        try {
            const response = await fetch("http://localhost:8081/users/signin_user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("Sessió iniciada correctament");
                acceptSign();
            } else {
                console.log("Error en registrar l'usuari");
            }
        } catch (error) {
            console.error("Hi ha hagut un error:", error);
        }
    }

    return isAuthenticated ? (
        <Navigate to="/xat" />
    ) : (
        <>
            <form onSubmit={signIn}>
                <h1>Sign in</h1>
                <label htmlFor="">Username</label>
                <input type="text" name="username_signin" value={username_si} onChange={(e) => setUserame_si(e.target.value)} id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password_signin" value={password_si} onChange={(e) => setPassword_si(e.target.value)} id="" />

                <button>Sign in</button>
            </form>
            <form onSubmit={signUp}>
                <h1>Sign up</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name_signup" value={name_su} onChange={(e) => setName(e.target.value)} id="" />

                <label htmlFor="">Username</label>
                <input type="text" name="username_signup" value={username_su} onChange={(e) => setUserame_su(e.target.value)} id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password_signup" value={password_su} onChange={(e) => setPassword_su(e.target.value)} id="" />

                <button type="submit">Sign up</button>
            </form>
        </>
    );
}
