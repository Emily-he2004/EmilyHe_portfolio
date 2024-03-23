import React, { useState } from "react";
import { PiSmileyAngryFill } from "react-icons/pi";
import { PiSmileySadFill } from "react-icons/pi";
import { PiSmileyXEyesFill } from "react-icons/pi";
import { PiSmileyWinkFill } from "react-icons/pi";

import { RiMoneyDollarCircleFill } from "react-icons/ri";

function MoodPicker() {
  const [selectedTheme, setSelectedTheme] = useState(""); // State to store the selected theme

  // Function to handle theme change
  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    // Apply the selected theme throughout your portfolio here
    // You can update CSS variables, apply class names, or use a CSS-in-JS library like styled-components
  };

  return (
    <div className="site-color-toggler">
      <h3>Got A Mood To Share?</h3>
      <p><em>We'll feel the same!</em><br></br>Right now, I'm...</p>
      <div className="color-toggle-nav">
        <button
          className={`mood-button ${selectedTheme === "happy" ? "active" : ""}`}
          onClick={() => handleThemeChange("happy")}
        >
          <PiSmileyWinkFill />
          Happy
        </button>
        <button
          className={`mood-button ${selectedTheme === "rich" ? "active" : ""}`}
          onClick={() => handleThemeChange("rich")}
        >
          {/* <PiSmileyXEyesFill /> */}
          <RiMoneyDollarCircleFill />
          Rich
        </button>
        <button
          className={`mood-button ${selectedTheme === "sad" ? "active" : ""}`}
          onClick={() => handleThemeChange("sad")}
        >
          <PiSmileySadFill />
          Sad
        </button>
        <button
          className={`mood-button ${selectedTheme === "angry" ? "active" : ""}`}
          onClick={() => handleThemeChange("angry")}
        >
          <PiSmileyAngryFill />
          Angry
        </button>
      </div>
      <p className="comment">When you're feeling peckish, swing by to switch up another mood.</p>
    </div>
  );
}

export default MoodPicker;
