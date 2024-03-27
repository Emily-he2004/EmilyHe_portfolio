import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { FaCopy } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contact({ restBase }) {
  const ContactID = "13";
  const restPath = `${restBase}pages/${ContactID}`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setLoaded(true);
        } else {
          setLoaded(false);
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setLoaded(false);
      }
    };
    fetchData();
  }, [restPath]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(restData.acf.contact_page[0].contact_email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <>
      {isLoaded ? (
        <div className="contact-page">
          {isCopied && (
            <div className="email-copy-message">Email copied successfully!</div>
          )}
          <div className="contact-container">
            <span className="clipboard-decor"></span>
            <h1>{restData.acf.contact_page[0].contact_me_title}</h1>
            <p className="message">{restData.acf.contact_page[0].contact_message}</p>
            <p className="email-cta">
              Email:
              <a href={`mailto:${restData.acf.contact_page[0].contact_email}`}>
                {restData.acf.contact_page[0].contact_email}
              </a>
              <button className="copy-email-btn" onClick={handleCopyEmail}>
                Copy Email
                <FaCopy className="copy-icon" />
              </button>
            </p>
            <div className="network-cta">
              <a
                href={restData.acf.contact_page[0].contact_linkedin}
                className="linkedin-cta"
              >
                LinkedIn <FaLinkedin />
              </a>
              <a
                href={restData.acf.contact_page[0].contact_github}
                className="github-cta"
              >
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Contact;
