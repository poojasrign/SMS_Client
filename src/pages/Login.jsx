import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../services/authService";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (event) => {

        event.preventDefault();

        if (username === "" || password === "") {
            alert("Please enter username and password");
            return;
        }

        loginAdmin(username, password)
            .then((response) => {

                console.log(response.data);

                alert(response.data.message);

                localStorage.setItem("isLoggedIn", "true");

                navigate("/");

            })
            .catch((error) => {

                console.log(error);

                if (error.response) {
                    alert(error.response.data?.message || "Login failed");
                } else {
                    alert("Backend server is not running");
                }

            });
    };

    return (
        <div className="login-container">

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <h1>Admin Login</h1>

                <label>Username</label>

                <input
                    type="text"
                    value={username}
                    onChange={(event) =>
                        setUsername(event.target.value)
                    }
                />

                <label>Password</label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;