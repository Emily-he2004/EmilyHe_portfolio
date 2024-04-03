import { createContext, useState, useEffect } from "react";

export const ToggleSiteMode = createContext();

export const SiteModeProvider = ({ children }) => {
  const [siteMode, setSiteMode] = useState(
    localStorage.getItem("siteModes") || "pages"
  );

  useEffect(() => {
    localStorage.setItem("siteModes", siteMode);
  }, [siteMode]);

  return (
    <ToggleSiteMode.Provider value={{ siteMode, setSiteMode }}>
      {children}
    </ToggleSiteMode.Provider>
  );
};


