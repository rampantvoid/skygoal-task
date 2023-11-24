import React from "react";
import "./Footer.css";
import Anchor from "../AnchorLink/Anchor";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "40px",
            fontWeight: "600",
            width: "688px",
            textAlign: "center",
          }}
          className="footer-heading"
        >
          Student Special: Discounted rates on tropical getaways!
        </p>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            width: "423px",
            textAlign: "center",
            lineHeight: "22px",
          }}
          className="footer-subheading"
        >
          Let's embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>

        <div className="footer-links">  
          <ul>
            <a href="#">
              <li>Privacy Policy</li>
            </a>
            <a href="#">
              <li>Terms of Use</li>
            </a>
            <a href="#">
              <li>Sales and Refunds</li>
            </a>
            <a href="#">
              <li>Legal</li>
            </a>
            <div
              style={{
                display: "flex",
                gap: "60px",
                fontWeight: "600",
              }}
            >
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Schedules</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Memberships</li>
              </a>
              <a href="#">
                <li>Joins</li>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
