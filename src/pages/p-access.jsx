import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useState, useId } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { API_URL } from "../api_handlers/consts";

import oxapp_logo from "../assets/logo/transparent_logo.png";

import "../styles/access/s-access.css";

export default function Sign() {
    const [name, setName] = useState("");
    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");

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

    const AccessActions = {
        signIn: "signIn",
        signUp: "signUp"
    }

    const [accessAction, setAccessAction] = useState(AccessActions.signIn);

    function toggleForm() {
        setAccessAction(accessAction === AccessActions.signIn
            ? AccessActions.signUp
            : AccessActions.signIn);
    }

    function triggerError(id, message) {
        var errorBanner = document.getElementById(id);
        if (errorBanner.classList.contains("invisible"))
            errorBanner.classList.remove("invisible");
        errorBanner.innerText = message;
    }

    async function handleAccesRequest(event) {
        event.preventDefault();
        
        const data = {
            username: username,
            password: password
        }

        if (accessAction === AccessActions.signUp)
            data.name = name

        try {
            const url = `${API_URL}/sign_users/${accessAction}`;
            console.log(url);
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                credentials: "include"
            });

            const responseData = await response.json();
            if (response.ok) {
                console.log(responseData["message"]);
                acceptSign();
            } else {
                console.log(responseData["message"]);
                triggerError("errorLabel", responseData["message"]);
            }
        } catch (error) {
            console.error("fetch error:", error);
        }
    }

    function getForm() {
        return (
            <form onSubmit={handleAccesRequest} className="a-form">
                <h1>{accessAction === AccessActions.signIn ? "Sign in" : "Sign up"}</h1>
    
                <div
                    className="a-errorLabel invisible"
                    id={"errorLabel"}
                ></div>
    
                {/* This bloc is only rendered in case of Sign Up */}
                {accessAction === AccessActions.signUp && (
                    <>
                        <label htmlFor={ids.name}>Name</label>
                        <input
                            type="text"
                            autoComplete="off"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id={ids.name}
                        />
                    </>
                )}
    
                <label htmlFor={ids.username}>Username</label>
                <input
                    type="text"
                    autoComplete="off"
                    name={"username"}
                    value={username}
                    onChange={(e) => setUserame(e.target.value)}
                    id={ids.username}
                />
    
                <label htmlFor={ids.password}>
                    Password
                </label>
                <input
                    type="password"
                    autoComplete="off"
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id={ids.password}
                />
    
                <div className="a-accessOptions-container">
                    <p onClick={toggleForm} className="g-pointer">
                        {
                            accessAction === AccessActions.signIn
                                ? "Create new account"
                                : "Do you already have an account?"
                        }
                    </p>
                    <button type="submit" className={"mainButton"}>
                        {accessAction === AccessActions.signIn ? "Sign in" : "Sign up"}
                    </button>
                </div>
            </form>
        );
    }

    return auth.isAuthenticated ? <Navigate to="/" />
    : (
        <div className="a-body">
            <header className="a-header">
                <Link to={"/"}><img className="a-header-logo" src={oxapp_logo} alt="oxapp logo"/></Link>
            </header>
            <div className="a-forms-container">
                {getForm()}
            </div>
        </div>
    );
}
