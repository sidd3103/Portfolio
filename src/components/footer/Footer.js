import React from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";

export default function Footer() {
  // const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div"></div>
    </Fade>
  );
}
