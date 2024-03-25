import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { NavLink } from "react-router-dom";

function About({ restBase }) {
  const AboutID = "11";
  const restPath = `${restBase}pages/${AboutID}`;
  const [restData, setData] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setLoadStatus(true);
          fetchProfileImage(data.acf.about_page[0].profile_picture);
        } else {
          setLoadStatus(false);
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  const fetchProfileImage = async (imageId) => {
    try {
      const response = await fetch(`${restBase}media/${imageId}`);
      if (response.ok) {
        const imageData = await response.json();
        setProfileImageUrl(imageData.source_url);
      } else {
        console.error(
          "Error fetching profile image data:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching profile image data:", error);
    }
  };

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoaded ? (
        <div className="about-page">
          <section className="about-me-section">
            <div className="profile-pic">
              {profileImageUrl && <img src={profileImageUrl} alt="Profile" />}
            </div>
            <blockquote>
              <strong>" CARPE DIEM "</strong>
            </blockquote>
            <div className="basic-intro">
              <h1>{restData.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: restData.acf.about_page[0].about_me_content,
                }}
              ></div>

              <div className="about-cta">
                <NavLink
                  to="/projects"
                  onClick={handleNavLinkClick}
                  className="about-project-cta"
                >
                  See My Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={handleNavLinkClick}
                  className="about-contact-cta"
                >
                  Contact Me
                </NavLink>
              </div>
            </div>
          </section>

          <section className="interests-hobbies-section">
            <h2>{restData.acf.about_page[0].interests_and_hobbies_title}</h2>
            {/* <div className="mapped-interests">
                {restData.interests_and_hobbies.map((interest) => (
                  <div key={interest}>{interest}</div>
                ))}
              </div> */}
            <p>Placeholder Content</p>
          </section>

          {restData.acf.about_page[1] && (
            <section className="tech-stack-section">
              <h2>{restData.acf.about_page[1].tech_stack_title}</h2>
              {/* <div className="all-tech-stack">
                {restData.tech_stack.map((tech) => (
                  <p key={tech}>{tech}</p>
                ))}
              </div> */}
              <p>Placeholder Content</p>
              <div className="development-stack">
                {/* <p>{restData.acf.about_page[1].all_development_stack_title}</p> */}
              </div>
              <div className="design-stack">
                {/* <p>{restData.acf.about_page[1].all_design_stack_title}</p> */}
              </div>
            </section>
          )}

          {restData.acf.about_page[2] && (
            <section className="upcoming-section">
              <h2>
                {restData.acf.about_page[2].upcoming_projects_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: restData.acf.about_page[2].upcoming_projects_content,
                }}
              ></div>
            </section>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default About;
