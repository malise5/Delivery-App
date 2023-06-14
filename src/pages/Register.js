import React from "react";
import "../styles/register.css";

const Register = () => {
    return (
        <div className="sign-up">
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="username..." />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter email..." />
                <label htmlFor="password"></label>
                <input
                    id="password"
                    type="password"
                    placeholder="create password.."
                />
                <label htmlFor="password2"></label>
                <input
                    id="password2"
                    type="password2"
                    placeholder="confirm password..."
                />
            </form>
        </div>
    );
};

export default Register;
