import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-wrapper">
        <div>
          <p
            style={{
              fontFamily: "Inter",
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "600",
              marginTop: "150px",
            }}
          >
            Testimonials
          </p>
        </div>
        <div className="user-testimonial-container">
          <div className="user-testimonial">
            <img src="/assets/images/test-image.png" alt="" />
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
              }}
            >
              Corey Korsgaard
            </p>
            <div className="line"></div>
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="user-testimonial">
            <img src="/assets/images/test-image.png" alt="" />
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
              }}
            >
              Corey Korsgaard
            </p>
            <div className="line"></div>
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="user-testimonial">
            <img src="/assets/images/test-image.png" alt="" />
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
              }}
            >
              Corey Korsgaard
            </p>
            <div className="line"></div>
            <p
              style={{
                color: "#2D2E2E",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "22px",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
