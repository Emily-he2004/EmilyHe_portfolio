import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function SingleProject({ restBase }) {
  const { projectId } = useParams();
  const restPath = `${restBase}projects/${projectId}`;
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

  return (
    <>
      {isLoaded ? (
        <section className="single-project-page">
          <p>SINGLE PROJECT PAGE HERE.</p>

          <section className="project-media">
            {/* Project demo video and gallery */}
            <iframe
              title="Project Demo"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/llxfsKiT4kU?rel=0"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            {/* Assuming project_gallery is an array of image IDs */}
            {restData.acf.projects_page[1].project_gallery.map((imageId) => (
              <img
                key={imageId}
                src={`https://emilyhe.ca/portfolio/wp-json/wp/v2/media/${imageId}`}
                alt="Project Image"
              />
            ))}
          </section>

          <section className="introduction">
            <div className="title-ctas">
              {/* Project title */}
              <h1>{restData.acf.projects_page[1].project_title}</h1>
              <div>
                {/* Project GitHub and live site links */}
                <a
                  href={restData.acf.projects_page[1].project_github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={restData.acf.projects_page[1].project_live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
            <div>
              <div className="overview">
                {/* Project overview */}
                <h2>{restData.acf.projects_page[1].project_overview}</h2>
                <p>{restData.acf.projects_page[1].project_overview_content}</p>
              </div>
              <div className="roles">
                {/* Project roles */}
                <h3>{restData.acf.projects_page[1].project_roles}</h3>
                <p>{restData.acf.projects_page[1].project_roles_content}</p>
              </div>
              <div className="tools">
                {/* Project tools */}
                <h3>Project Tools</h3>
                <div>
                  {restData.acf.projects_page[1].project_info_content.map(
                    (info, index) => (
                      <div key={index}>
                        <h3>{info.project_topic}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: info.topic_content,
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="in-depth-info">
            {restData.acf.projects_page[1].project_info_content.map(
              (info, index) => (
                <div key={index} className={info.project_topic.toLowerCase()}>
                  <h3>{info.project_topic}</h3>
                  <p dangerouslySetInnerHTML={{ __html: info.topic_content }} />
                </div>
              )
            )}
          </section>

          <section className="see-other-projects">
            <h3>See Other Projects</h3>
            <div className="other-projects-container">
              {/* Assuming see_other_projects is an array of project objects */}
              {restData.acf.projects_page[1].see_other_projects
                .slice(0, 2)
                .map((project) => (
                  <div key={project.id} className="other-project">
                    <a
                      href={ `${restBase}projects/${project.id}` }
                    >
                      <img
                        src={project.featured_media}
                        alt={`Project ${project.id} Thumbnail`}
                      />
                      <h4>{project.title.rendered}</h4>
                    </a>
                  </div>
                ))}
            </div>
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SingleProject;
