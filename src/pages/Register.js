// import React from "react";
// import "../styles/register.css";
// import { useState } from "react";

// const Register = () => {
//     return (
//         <div className="sign-up">
//             <div className="sign-header">
//                 <h1>Sign Up</h1>
//                 <p>
//                     Welcome to our delivery logistic app registration! Please
//                     complete the form below to create your account and start
//                     using our platform.
//                 </p>
//             </div>
//             <form>
//                 <div className="input-group">
//                     <label htmlFor="username">Username</label>
//                     <input
//                         id="username"
//                         type="text"
//                         placeholder="username..."
//                     />
//                 </div>
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
//                 <div className="input-group">
//                     <label htmlFor="password2">Confirm Password</label>
//                     <input
//                         id="password2"
//                         type="password2"
//                         placeholder="confirm password..."
//                     />
//                 </div>
//                 <button className="btn-in">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation and submission logic here
    };

    return (
        <div className="sign-up">
            <div className="sign-header">
                <h1>Sign Up</h1>
                <p>
                    Welcome to our delivery logistic app registration! Please
                    complete the form below to create your account and start
                    using our platform.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="username..."
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter email..."
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password..."
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn-in" type="submit">
                    Sign Up
                </button>
            </form>
            <Link to="/login" className="option">
                Already have an account? Login here
            </Link>
        </div>
    );
};

export default Register;
