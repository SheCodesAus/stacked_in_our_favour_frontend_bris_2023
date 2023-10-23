import { useState, useEffect } from "react";  // added useEffect
import { Link, useNavigate } from "react-router-dom";
import postRegister from "../api/postRegister";
import useAuth from "../hooks/use-auth";
import "./Form.css";

function RegisterForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    const [errorMessage, setErrorMessage] = useState("");

    const [credentials, setCredentials] = useState({
        email: "",
        username: "",
        password: "",
        role: "Attendee"  // default role is 'Attendee'
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const selectedRole = event.target.checked ? 'Organiser' : 'Attendee';
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            role: selectedRole,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Use the credentials directly from the state
        const { email, username, password, role } = credentials;
        console.log("Credentials before submitting:", { email, username, password, role });

        if (email && username && password) {
            try {
                const response = await postRegister(
                    email,
                    username,
                    password,
                    role
                );
                console.log("Registration response:", response);

                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/events");
            } catch (error) {
                setErrorMessage(error.message);
                console.error("Registration error:", error.message);
            }
        } else {
            console.log("Form fields validation failed");
            setErrorMessage("Please fill in all the fields.");
        }
    };

    useEffect(() => {
        console.log(credentials);
    }, [credentials]);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-styling">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                />
            </div>
            <div className="input-styling">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div className="input-styling">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
            </div>
            <table>
            <tbody>
                <tr>
                    <td style={{verticalAlign: 'middle'}}>
                        <label htmlFor="role">Are you an Organiser?</label>
                         </td>
                     <td style={{verticalAlign: 'middle'}}>
                        <input
                    type="checkbox"
                    id="role"
                    onChange={handleCheckboxChange}
                />
            </td>
        </tr>
    </tbody>
</table>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="input-styling">
                <button type="submit"><span>Register</span></button>
            </div>
            <a href="/login" className="style-a">Login</a>
        </form>
    );
}

export default RegisterForm;
