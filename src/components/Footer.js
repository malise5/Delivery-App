import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p>
                    &copy; {new Date().getFullYear()} Company Name. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
