import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState, useId } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { sendAccessRequest } from "../api_handlers/session";
import { useTheme } from "../theme/themeProvider";

import "../styles/access/s-access.css";

export default function Sign() {
    const [name, setName] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { icons, toggleTheme } = useTheme();

    const navigate = useNavigate();
    const auth = useAuth();
    
    const ids = {
        name: useId(),
        username: useId(),
        password: useId()
    };

    function acceptSign() {
        auth.saveUser();
        navigate('/');
    }

    const AccessActions = Object.freeze({
        SIGN_IN: "signin",
        SIGN_UP: "signup",
    });
    
    const [accessAction, setAccessAction] = useState(AccessActions.SIGN_IN);
    
    function toggleForm() {
        setAccessAction((prev) =>
            prev === AccessActions.SIGN_IN ? AccessActions.SIGN_UP : AccessActions.SIGN_IN
        );
    }

    function triggerError(message) {
        setErrorMessage(message);
    }

    const [isLoading, setIsLoading] = useState(false);
    
    async function handleAccesRequest(event) {
        event.preventDefault();
        setIsLoading(true);
        const data = {
            username: username,
            password: password,
            ...(accessAction === AccessActions.SIGN_UP && { name }),
        }

        try {
            const response = await sendAccessRequest(accessAction.toLocaleLowerCase(), data);
            const responseData = await response.json();
            if (response.ok) {
                console.log(responseData["message"]);
                var refreshToken = responseData["refreshToken"];
                refreshToken && localStorage.setItem("refreshToken", refreshToken)
                acceptSign();
            } else {
                console.log(responseData["message"]);
                triggerError(responseData["message"]);
            }
        } catch (error) {
            console.error("fetch error:", error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const fields = [
        ...(accessAction === AccessActions.SIGN_UP ? [{ label: "Name", state: name, setState: setName, id: ids.name }] : []),
        { label: "Username", state: username, setState: setUserame, id: ids.username },
        { label: "Password", state: password, setState: setPassword, id: ids.password },
    ];

    function getForm() {
        return (
            <form onSubmit={handleAccesRequest} className="a-form">
                <h1>{accessAction === AccessActions.SIGN_IN ? "Sign in" : "Sign up"}</h1>
    
                {errorMessage && <div className="a-errorLabel">{errorMessage}</div>}
    
                {fields.map(({ label, state, setState, id }) => (
                    <div key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input
                            type={label === "Password" ? "password" : "text"}
                            autoComplete="off"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            autoFocus={label === "Username"}
                            id={id}
                        />
                    </div>
                ))}
    
                <div className="a-accessOptions-container">
                    <p onClick={toggleForm} className="g-pointer">
                        {
                            accessAction === AccessActions.SIGN_IN
                                ? "Create new account"
                                : "Do you already have an account?"
                        }
                    </p>
                    <button type="submit" className="g-button g-mainButton" disabled={isLoading}>
                        {isLoading ? "Loading..." : accessAction === AccessActions.SIGN_IN ? "Sign in" : "Sign up"}
                    </button>
                </div>
            </form>
        );
    }

    return auth.isAuthenticated ? <Navigate to="/" />
    : (
        <div className="a-body">
            <header className="a-header">
                <Link to={"/"}><img className="a-header-logo" src={icons.logo} alt="oxapp logo"/></Link>
            </header>
            <div className="a-forms-container">
                {getForm()}
            </div>
        </div>
    );
}
