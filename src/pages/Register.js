import React from "react";
import "../styles/register.css";

const Register = () => {
    return (
        <div className="sign-up">
            <form>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="username..."
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter email..."
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="create password.."
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        id="password2"
                        type="password2"
                        placeholder="confirm password..."
                    />
                </div>
                <button className="btn-in">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
