import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";

function RightNav() {
  const [isCopied, setCopied] = useState(false);

  //   const handleCopyEmail = () => {
  //     navigator.clipboard.writeText("emmyemmyhe@gmail.com");
  //     setCopied(true);
  //     setTimeout(() => setCopied(false), 1200);
  //   };
  return (
    <div className="right-nav">
      <button
        className="copy-email-btn"
        //   onClick={handleCopyEmail}
      >
        <a href={`mailto:emmyemmyhe@gmail.com`}>
          <span className="email-text">emmyemmyhe@gmail.com</span>
          {/* <FaCopy className="copy-icon" /> */}
        </a>
          <span className="line-right"></span>
      </button>
    </div>
  );
}

export default RightNav;
