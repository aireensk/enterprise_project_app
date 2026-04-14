import { useState } from "react";
import { login, register } from "../api";

export default function Auth({ setToken }) {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async () => {
        try {
            if (isLogin) {
                const res = await login(form.username, form.password);

                localStorage.setItem("token", res.data.access);
                setToken(res.data.access);
                
            } else {
                await register(form.username, form.email, form.password);
                alert("Account created! Please login.");
                setIsLogin(true);
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong");
        }
    };

    return (
        <div className="card">
            <h2>{isLogin ? "Login" : "Register"}</h2>

            <input
                placeholder="Username"
                onChange={e => setForm({ ...form, username: e.target.value })}
            />

            {!isLogin && (
                <input
                    placeholder="Email"
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
            )}

            <input
                type="password"
                placeholder="Password"
                onChange={e => setForm({ ...form, password: e.target.value })}
            />

            <button onClick={handleSubmit}>Submit</button>

            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Create account" : "Already have an account?"}
            </p>
        </div>
    );
}