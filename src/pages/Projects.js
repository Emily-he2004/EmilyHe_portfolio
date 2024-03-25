import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { NavLink } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";


function Projects({ restBase }) {
  const restPath = `${restBase}projects?`;
  const [restData, setRestData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setRestData(data);
          setIsLoaded(true);
        } else {
          console.error("Error fetching data:", response.status);
          setIsLoaded(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoaded(false);
      }
    };

    fetchData();
  }, [restPath]);

  const truncateOverview = (overview) => {
    if (overview && overview.length > 180) {
      return overview.substring(0, 180) + "...";
    } else if (overview) {
      return overview;
    } else {
      return "";
    }
  };

  return (
    <>
      {isLoaded ? (
        <section className="projects-page">
          <div className="debriefing">
            <h1>All Projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor, eros a dapibus accumsan, tortor turpis molestie ex, at
              aliquet turpis quam a mauris. Sed consequat, justo sit amet
              consequat scelerisque, felis elit scelerisque neque, sit amet
              luctus nunc lorem ut libero. Sed consequat id eros eu posuere.
            </p>
          </div>

          <section className="project-previews">
            {restData &&
              restData.map((project) => (
                <div
                  key={project.id}
                  id={`project-${project.id}`}
                  className="project-teaser"
                >
                  {/* Project's featured media */}
                  {/* Assuming project.featured_media is the image URL */}
                  <NavLink to={`/project/${project.slug}`}>
                    <img src={project.featured_media} alt="Project Thumbnail" />
                  </NavLink>
                  <div className="teaser-content">
                    <NavLink to={`/project/${project.slug}`}>
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: project.title.rendered,
                        }}
                      ></h2>
                    </NavLink>
                    <p>
                      {truncateOverview(
                        project.acf.projects_page[0]?.project_overview_content
                      )}
                    </p>

                    <div className="project-main-cta">
                      <a
                        href={project.acf.projects_page[0].project_live_site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-site-cta"
                      >
                        Live Site <HiExternalLink />
                      </a>
                      <NavLink
                        to={`/project/${project.slug}`}
                        className="read-more-cta"
                      >
                        Read More &#8594;
                      </NavLink>
                    </div>
                  </div>
                  <div className="tech-stack">
                    Related Tech Stack supposed to be here...
                    {project.acf.my_tech_stack &&
                      project.acf.my_tech_stack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                  </div>
                </div>
              ))}
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Projects;
