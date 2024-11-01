import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Sign() {
    const [name_su, setName] = useState("");
    const [username_su, setUserame_su] = useState("");
    const [password_su, setPassword_su] = useState("");

    const [username_si, setUserame_si] = useState("");
    const [password_si, setPassword_si] = useState("");

    const auth = useAuth()

    return auth.isAuthenticated ? <Navigate to="/xat" /> : (
        <>
            <form action="">
                <h1>Sign in</h1>
                <label htmlFor="">Username</label>
                <input type="text" name="username_signin" value={username_si} onChange={(e) => setUserame_si(e.target.value)} id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password_signin" value={password_si} onChange={(e) => setPassword_si(e.target.value)} id="" />

                <button>Sign in</button>
            </form>
            <form action="">
            <h1>Sign in</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name_signup" value={name_su} onChange={(e) => setName(e.target.value)} id="" />

                <label htmlFor="">Username</label>
                <input type="text" name="username_signup" value={username_su} onChange={(e) => setUserame_su(e.target.value)} id="" />

                <label htmlFor="">Password</label>
                <input type="password" name="password_signup" value={password_su} onChange={(e) => setPassword_su(e.target.value)} id="" />

                <button>Sign up</button>
            </form>
        </>
    );
}