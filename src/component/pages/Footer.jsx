import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Info */}
        <div className="footer-logo">
          {/* <div className="footer-image">
            <img src="/title.png" style={{ width: "150px" }} />
          </div> */}
          <h2>JobHive</h2>

          <p>
            JobHive is your go-to hub for finding jobs that fit your skills and
            goals. Browse thousands of job listings, save the ones you love, and
            apply in seconds.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#SavedJob"> Saved-Job</a>
            </li>
            <li>
              <a href="#Feedback">Feedback-Form</a>
            </li>
            <li>
              <a href="#ContactUs">Contact-Us</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@JobHive.com</p>
          <p>Phone: +234 8104257467</p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/share/1PpssERkWo/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/kinglisa_1?s=21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/kinglisa_1?igsh=eGw0ZGFobDV1bTVo&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/lisa-emesowum-a4630835a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 JobHive. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
