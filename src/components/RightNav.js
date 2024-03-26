import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";

function RightNav() {
  const [isCopied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emmyemmyhe@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="right-nav">
      <button className="copy-email-btn" onClick={handleCopyEmail}>
        <a href={`mailto:emmyemmyhe@gmail.com`}>
          emmyemmyhe@gmail.com <FaCopy className="copy-icon" />{" "}
          <span className="line-right"></span>
        </a>
      </button>
    </div>
  );
}

export default RightNav;
