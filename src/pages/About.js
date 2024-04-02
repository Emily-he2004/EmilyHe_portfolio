import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { NavLink } from "react-router-dom";

function About({ restBase }) {
  const AboutID = "11";
  const restPath = `${restBase}pages/${AboutID}`;
  const [restData, setData] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [clicked, setClicked] = useState(false);
  const [interestsAndHobbies, setInterestsAndHobbies] = useState([]);
  const [developmentStack, setDevelopmentStack] = useState([]);
  const [designStack, setDesignStack] = useState([]);

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

  useEffect(() => {
    const fetchInterestsAndHobbies = async () => {
      try {
        const responseInterests = await fetch(
          `${restBase}interests-and-hobbies?per_page=50`
        );
        if (responseInterests.ok) {
          const dataInterests = await responseInterests.json();
          setInterestsAndHobbies(dataInterests.map((item) => item.name));
        }
      } catch (error) {
        console.error("Error fetching interests and hobbies:", error);
      }
    };

    const fetchTechStack = async () => {
      try {
        const responseDesign = await fetch(`${restBase}tech-stack?parent=4&per_page=30`);
        const responseDevelop = await fetch(`${restBase}tech-stack?parent=3&per_page=30`);
        if (responseDesign.ok && responseDevelop.ok) {
          const dataDesign = await responseDesign.json();
          const dataDevelop = await responseDevelop.json();
          setDevelopmentStack(dataDesign.map((item) => item.name));
          setDesignStack(dataDevelop.map((item) => item.name));
        }
      } catch (error) {
        console.error("Error fetching tech stack:", error);
      }
    };

    fetchInterestsAndHobbies();
    fetchTechStack();
  }, [restBase]);

  const handleNavLinkClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const lis = document.querySelectorAll(".nav-menu li");
    lis.forEach((li) => {
      li.classList.remove("clicked");
    });

    setClicked(true);
    event.target.closest("li").classList.add("clicked");
  };

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
              <p
                dangerouslySetInnerHTML={{
                  __html: restData.acf.about_page[0].about_me_content,
                }}
              ></p>

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
            <div className="span-container interests">
              {interestsAndHobbies.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            <p>{restData.acf.about_page[0].interests_and_hobbies_message}</p>
            </div>
          </section>

          {restData.acf.about_page[1] && (
            <section className="tech-stack-section">
              <h2>{restData.acf.about_page[1].tech_stack_title}</h2>
              <div className="stack-container">
                <div className="development-stack">
                  <h3>
                    {restData.acf.about_page[1].all_development_stack_title}
                  </h3>
                  <div className="span-container tech develop">
                    {designStack.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="design-stack">
                  <h3>{restData.acf.about_page[1].all_design_stack_title}</h3>
                  <div className="span-container tech design">
                    {developmentStack.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                </div>
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
