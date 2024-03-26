import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function LeftNav() {
  return (
    <div className="left-nav">
      <div className="left-ctas">
        <a
          href="https://www.linkedin.com/in/emily-he-dev/"
          className="linkedin-cta"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Emily-he2004" className="github-cta">
          <FaGithub />
        </a>
      </div>
      <span className="line-left"></span>
    </div>
  );
}

export default LeftNav;
