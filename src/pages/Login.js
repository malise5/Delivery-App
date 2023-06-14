// import React from "react";
// import "../styles/login.css";

// const Login = () => {
//     return (
//         <div className="sign-up">
//             <div className="sign-header">
//                 <h1>Login</h1>
//                 <p>
//                     Please complete the form below to access your account and
//                     start using our platform
//                 </p>
//             </div>
//             <form>
//                 {/* <div className="input-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         id="username"
//                         type="text"
//                         placeholder="username..."
//                     />
//                 </div> */}
//                 <div className="input-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         id="email"
//                         type="email"
//                         placeholder="Enter email..."
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         type="password"
//                         placeholder="create password.."
//                     />
//                 </div>
//                 {/* <div className="input-group">
//                     <label htmlFor="password2">Confirm Password</label>
//                     <input
//                         id="password2"
//                         type="password2"
//                         placeholder="confirm password..."
//                     />
//                 </div> */}
//                 <button className="btn-in">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Perform form validation and submission logic here
    //     const storedCredentials = JSON.parse(
    //         localStorage.getItem("userCredentials")
    //     );
    //     if (
    //         storedCredentials &&
    //         storedCredentials.email === loginData.email &&
    //         storedCredentials.password === loginData.password
    //     ) {
    //         //success login
    //         console.log("Login Successful");
    //         //clear the login form
    //         setLoginData({
    //             email: "",
    //             password: "",
    //         });
    //     } else {
    //         //failed login
    //         console.log("Login Failed");
    //         //clear the login form
    //         setLoginData({
    //             email: "",
    //             password: "",
    //         });
    //     }
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const storedCredentials = localStorage.getItem("userCredentials");
            const parsedCredentials = JSON.parse(storedCredentials);
            if (
                parsedCredentials &&
                parsedCredentials.email === loginData.email &&
                parsedCredentials.password === loginData.password
            ) {
                // Successful login
                console.log("Login Successful");
                setError(null);
                // Clear the login form
                setLoginData({
                    email: "",
                    password: "",
                });
            } else {
                // Failed login
                console.log("Login Failed");
                setError("Login Failed");
                // Clear the login form
                setLoginData({
                    email: "",
                    password: "",
                });
            }
        } catch (error) {
            console.error("Error parsing user credentials:", error);
        }
    };

    return (
        <div className="sign-up">
            <div className="sign-header">
                <h1>Login</h1>
                <p>
                    Please complete the form below to access your account and
                    start using our platform
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email..."
                        value={loginData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="create password.."
                        value={loginData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <h3 className="error">{error}</h3>
                <button className="btn-in" type="submit">
                    Login
                </button>
            </form>
            <Link to="/register" className="option">
                Don't have an account? Register here
            </Link>
        </div>
    );
};

export default Login;
