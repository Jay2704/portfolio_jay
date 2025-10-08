import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";



export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Removed default credit line as requested */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Jay Paun
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built with ❤️ using{" "}
          <a 
            href="https://github.com/saadpasta/developerFolio" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: isDark ? "#61dafb" : "#55198b" }}
          >
            DeveloperFolio
          </a>{" "}
          by Saad Pasta
        </p>
      </div>
    </Fade>
  );
}
