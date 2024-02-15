import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <h5 className="footer-title">Interessé ? Contactez moi via mail !</h5>

            <a style={{textDecoration: 'none'}} href="mailto:eddie-tayeb@hotmail.fr" className="footer-button">
                Contactez moi
            </a>
            <p className="footer-subtitle">Designed and Developped by Eddie-Tayeb Ghalem</p>
        </footer>
    );
};

export default Footer;
