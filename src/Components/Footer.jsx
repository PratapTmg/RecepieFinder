import React from "react";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">Famous_Recepie.com</p>
        <p className="description">
          This is the place where you can find your perfect and dream food
          recepie here.
        </p>
        <p className="copyright">&copy; 2020 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>famousrecepie@gmail.com</p>
        <p>+356-4563-1548</p>
        <p>1265 Street NYC</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
