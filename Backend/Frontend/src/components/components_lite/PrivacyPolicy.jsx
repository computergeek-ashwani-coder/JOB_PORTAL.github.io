import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <style>
        {`
          /* General page styling */
          .privacy-policy-container {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            margin: 20px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 1000px;
            margin: 40px auto;
          }

          /* Title styling */
          .title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            padding: 10px 0;
            text-transform: uppercase;
            border-bottom: 2px solid #3498db;
          }

          /* Section styling */
          .section {
            margin-bottom: 30px;
          }

          /* Headings */
          h2 {
            font-size: 1.8rem;
            color: #2980b9;
            margin-bottom: 15px;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 8px;
          }

          /* Paragraph text */
          p {
            font-size: 1.1rem;
            color: #34495e;
            line-height: 1.7;
            margin-bottom: 15px;
          }

          /* Unordered list styling */
          ul {
            margin-left: 20px;
            font-size: 1rem;
            color: #34495e;
          }

          ul li {
            margin-bottom: 8px;
          }

          /* Strong text styling */
          ul li strong {
            color: #2980b9;
            font-weight: bold;
          }

          /* Sublist inside main lists */
          ul li ul {
            list-style-type: square;
            margin-left: 30px;
          }

          ul li ul li {
            margin-bottom: 8px;
          }

          /* Footer styling */
          .footer {
            text-align: center;
            font-size: 1rem;
            color: #777;
            margin-top: 40px;
          }

          .footer a {
            color: #3498db;
            text-decoration: none;
          }

          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <h1 className="title">Privacy Policy for Job Portal</h1>

      <section className="section">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy outlines how we collect, use, and protect your
          information when you visit our job portal website.
        </p>
      </section>

      <section className="section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Resume/CV</li>
            </ul>
          </li>
          <li>
            <strong>Usage Data:</strong>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>
            To gather analysis or valuable information so that we can improve our
            services
          </li>
          <li>To monitor the usage of our services</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Data Security</h2>
        <p>
          We take the security of your personal information seriously and
          implement appropriate technical and organizational measures to protect
          it.
        </p>
      </section>

      <section className="section">
        <h2>5. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share your information with:
        </p>
        <ul>
          <li>Service providers who assist us in operating our website</li>
          <li>Law enforcement agencies if required by law</li>
        </ul>
      </section>

      <section className="section">
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction of your personal information</li>
          <li>Request deletion of your personal information</li>
        </ul>
      </section>

      <section className="section">
        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </section>

      <section className="section">
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at [your email address].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
