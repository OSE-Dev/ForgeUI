import * as React from "react";

const Footer = (): React.ReactElement => {

    return (
        <div className="footer">
            <div className="footer-start">
                Copyright OSE
            </div>
            <div className="footer-end">
                <a href="./app/docs">Docs</a>
                <a href="./app/aboutus">About Us</a>
                <a href="./app/policy">Policy</a>
                <a href="./app/Terms">Terms</a>
            </div>
        </div>
    );
};

export default Footer;
