import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Anchor = ({ title, links }) => {
  return (
    <a href={`#${links}`} style={{ textDecoration: "none", color: "#262626" }}>
      <li style={{ textTransform: "capitalize" }}>{title}</li>
    </a>
  );
};

export default Anchor;
