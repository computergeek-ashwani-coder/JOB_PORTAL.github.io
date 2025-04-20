import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <style>
        {`
          /* Footer container */
          .footer-container {
            background-color: #2c3e50;
            padding: 30px;
            color: #ecf0f1;
            text-align: center;
            border-radius: 10px;
            margin-top: 50px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          /* Footer text */
          .footer-container p {
            margin: 8px 0;
            font-size: 1rem;
          }

          /* Link styling */
          .footer-container a {
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
          }

          /* Link hover effect */
          .footer-container a:hover {
            text-decoration: underline;
          }

          /* Copyright text styling */
          .footer-container p:first-child {
            font-size: 1.2rem;
            font-weight: 600;
          }

          /* Powered by text */
          .footer-container p:nth-child(2) {
            font-size: 1rem;
            color: #bdc3c7;
          }

          /* Bottom links style */
          .footer-container p:last-child {
            font-size: 1rem;
          }
        `}
      </style>

      <div>
        <p>© 2025 BIHAR NATIONAL COLLEGE. <br /> All rights reserved.</p>
        <p>
          Developed by <a href="https://www.instagram.com/ashwaniranjan999" target="_blank" rel="noopener noreferrer">BCA SEM-6 Students(Ashwani Ranjan , Lucky Raj and Krish Kumar)</a>
        </p>
        <p>
          <Link to={"/PrivacyPolicy"}>Privacy Policy</Link> | <Link to={"/TermsofService"}>Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
