import React from "react";
import { NavLink } from "react-router-dom";

import { useState, useEffect } from "react";
import Loading from "../components/Loading";

function Home({ restBase }) {
  const HomeID = "8";
  const restPath = `${restBase}pages/${HomeID}`;
  const [restData, setData] = useState([]);
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPath]);

  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoaded ? (
        <div className="home-page">
          {/* <p>HOME PAGE HERE.</p> */}
          <section className="profile-section">
            <div className="profile-content">
              <p>{restData.acf.home_page[0].eyebrow_greeting}</p>
              <h1>{restData.acf.home_page[0].my_name}</h1>
              <h3>{restData.acf.home_page[0].occupation}</h3>
              <p>{restData.acf.home_page[0].in_depth_greeting}</p>
            <div className="home-cta">
              <NavLink
                to="/projects"
                onClick={handleNavLinkClick}
                className="home-project-cta"
              >
                My Projects
              </NavLink>
              <NavLink
                to="/about"
                onClick={handleNavLinkClick}
                className="home-about-cta"
              >
                About Me
              </NavLink>
            </div>
            </div>
            {/* MOOD PICKER for NAV name idea! */}
            <div className="site-color-toggler">
              <h3>Got A Mood to share?</h3>
              <p>We'll feel the same!</p>
              <p>Right now, I'm...</p>
              <div className="color-toggle-nav">
                <ul>
                  <li>Angry</li>
                  <li>Sad</li>
                  <li>Tired</li>
                  <li>Excited</li>
                  {/* <li>Worried</li> */}
                  {/* <li>Amused</li> */}
                </ul>
              </div>
              <p>
                When you're feeling peckish, swing by to switch up another mood.
              </p>
            </div>
          </section>
          <section className="featured-project-section">
            <div className="featured-project-intro">
              <h2>
                {restData.acf.home_page[1].featured_project_section_title}
              </h2>
              <NavLink
                to="/projects"
                onClick={handleNavLinkClick}
                className="featured-projects-cta"
              >
                See All Projects &#8594;
              </NavLink>
            </div>
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Home;
