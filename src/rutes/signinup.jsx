import { useState, useId } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/signPage/signStyles.css";
import { BasicHeader } from "../components/BasicHeader";
import { API_URL } from "../consts/consts";

export default function Sign() {
    const [name_su, setName] = useState("");
    const [username_su, setUserame_su] = useState("");
    const [password_su, setPassword_su] = useState("");

    const [username_si, setUserame_si] = useState("");
    const [password_si, setPassword_si] = useState("");

    const navigate = useNavigate();
    const auth = useAuth();
    
    const nameId = useId();
    const usernameSignInId = useId();
    const passwordSignInId = useId();
    const usernameSignUpId = useId();
    const passwordSignUpId = useId();

    function acceptSign() {
        auth.saveUser();
        navigate('/oxat');
    }

    async function signUp(event) {
        event.preventDefault();
        console.log("hello world");

        const data = { name: name_su, username: username_su, password: password_su };

        try {
            const response = await fetch(API_URL + "/users/signup_user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
        event.preventDefault();
        console.log("hello world");

        const data = { username: username_si, password: password_si };

        try {
            const response = await fetch(API_URL + "/sign_users/signin_user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("Sessió iniciada correctament");
                acceptSign();
            } else {
                console.log("Usuari o contrasenya incorrectes");
            }
        } catch (error) {
            console.error("Hi ha hagut un error:", error);
        }
    }

    return auth.isAuthenticated ? (
        <Navigate to="/oxat" />
    ) : (
        <>
            <BasicHeader />
            <div className="signFormsContainer">
                <div className="signBox">
                    <form onSubmit={signIn} className="signForm">
                        <h1>Sign in</h1>
                        <label htmlFor={usernameSignInId}>Username</label>
                        <input type="text" autoComplete="off" name="username_signin" value={username_si} onChange={(e) => setUserame_si(e.target.value)} id={usernameSignInId} />

                        <label htmlFor={passwordSignInId}>Password</label>
                        <input type="password" autoComplete="off" name="password_signin" value={password_si} onChange={(e) => setPassword_si(e.target.value)} id={passwordSignInId} />

                        <button type="submit" className="mainButton">Sign in</button>
                    </form>
                    <div className="signDivider"></div>
                    <form onSubmit={signUp} className="signForm">
                        <h1>Sign up</h1>
                        <label htmlFor={nameId}>Name</label>
                        <input type="text" autoComplete="off" name="name_signup" value={name_su} onChange={(e) => setName(e.target.value)} id={nameId} />

                        <label htmlFor={usernameSignUpId}>Username</label>
                        <input type="text" autoComplete="off" name="username_signup" value={username_su} onChange={(e) => setUserame_su(e.target.value)} id={usernameSignUpId} />

                        <label htmlFor={passwordSignUpId}>Password</label>
                        <input type="password" autoComplete="off" name="password_signup" value={password_su} onChange={(e) => setPassword_su(e.target.value)} id={passwordSignUpId} />

                        <button type="submit" className="secondaryButton">Sign up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
