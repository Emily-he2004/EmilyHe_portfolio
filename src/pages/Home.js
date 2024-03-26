import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import MoodPicker from "../components/MoodPicker";
import { HiExternalLink } from "react-icons/hi";

function Home({ restBase }) {
  const HomeID = "8";
  const slug = "cascadia-floral-boutique";

  const restPathHome = `${restBase}pages/${HomeID}`;
  const featurePath = `${restBase}projects?slug=${slug}`;

  const [restData, setData] = useState([]);
  const [featuredProject, setFeaturedProject] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response_home = await fetch(restPathHome);
      const response_featured = await fetch(featurePath);

      if (response_home.ok && response_featured.ok) {
        const dataHome = await response_home.json();
        const dataFeature = await response_featured.json();
        setData(dataHome);
        setFeaturedProject(dataFeature[0]);
        setLoadStatus(true);
      } else {
        setLoadStatus(false);
      }
    };
    fetchData();
  }, [restPathHome, featurePath]);

  console.log(restData, featuredProject);

  const truncateOverview = (overview) => {
    if (overview && overview.length > 180) {
      return overview.substring(0, 180) + "...";
    } else if (overview) {
      return overview;
    } else {
      return "";
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
        <div className="home-page">
          <section className="profile-section">
            <div className="profile-content">
              <p>{restData.acf.home_page[0].eyebrow_greeting}</p>
              <h1>{restData.acf.home_page[0].my_name}</h1>
              <h3>{restData.acf.home_page[0].occupation}</h3>
              <p className="in-depth-greet">
                {restData.acf.home_page[0].in_depth_greeting}
              </p>
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
            <MoodPicker />
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

            {/* ________Featured Project Below____________ */}
            <div className="project-teaser">
              <NavLink to={`/project/${featuredProject.slug}`}>
                <img
                  src={featuredProject.featured_media}
                  alt="Project Thumbnail"
                />
              </NavLink>
              <div className="teaser-content">
                <NavLink to={`/project/${featuredProject.slug}`}>
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: featuredProject.title.rendered,
                    }}
                  ></h2>
                </NavLink>
                <p>
                  {truncateOverview(
                    featuredProject.acf.projects_page[0]
                      .project_overview_content
                  )}
                </p>
                <div className="project-main-cta">
                  <a
                    href={
                      featuredProject.acf.projects_page[0].project_live_site
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-site-cta"
                  >
                    Live Site <HiExternalLink />
                  </a>
                  <NavLink
                    to={`/project/${featuredProject.slug}`}
                    className="read-more-cta"
                  >
                    Read More &#8594;
                  </NavLink>
                </div>
              </div>
              <div className="tech-stack">
                {featuredProject.acf.projects_page[0].tools_content
                  .my_tech_stack &&
                  featuredProject.acf.projects_page[0].tools_content.my_tech_stack.map(
                    (tech, index) => <span key={index}>{tech}</span>
                  )}
              </div>
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
