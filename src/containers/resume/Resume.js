import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Resume.scss";
import {resumeSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Resume() {
  const {isDark} = useContext(StyleContext);
  
  if (!resumeSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="resume-main" id="resume">
        <div className="resume-main-div">
          <div className="resume-text-div">
            <h1
              className={isDark ? "dark-mode resume-title" : "resume-title"}
            >
              {resumeSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode resume-subtitle"
                  : "resume-subtitle"
              }
            >
              {resumeSection.subtitle}
            </p>
            <div className="resume-download-section">
              <a
                href="/Jay_resume_sept.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-download-link"
              >
                <button className="resume-download-btn">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
