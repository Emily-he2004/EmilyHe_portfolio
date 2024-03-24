import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function SingleProject({ restBase }) {
  const { slug } = useParams();
  const restPath = `${restBase}projects?slug=${slug}`;
  const [restData, setData] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath);
      if (response.ok) {
        const data = await response.json();
        setData(data[0]); // Assuming there's only one project returned
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
          <section className="project-media">
            <iframe
              title="Project Demo"
              width="560"
              height="315"
              src={restData.acf.projects_page[1].project_demo}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <div>{restData.acf.projects_page[1].project_gallery}</div>
            {/* {restData.acf.projects_page[1].project_gallery.map((imageId) => (
              <img
                key={imageId}
                src={`https://emilyhe.ca/portfolio/wp-json/wp/v2/media/${imageId}`}
                alt="Project Image"
              />
            ))} */}
          </section>

          <section className="introduction">
            <div className="title-ctas">
              <h1>{restData.acf.projects_page[1].project_title}</h1>
              <div>
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
                <h2>{restData.acf.projects_page[1].project_overview}</h2>
                <p>{restData.acf.projects_page[1].project_overview_content}</p>
              </div>
              <div className="roles">
                <h3>{restData.acf.projects_page[1].project_roles}</h3>
                <p>{restData.acf.projects_page[1].project_roles_content}</p>
              </div>
              <div className="tools">
                <h3>{restData.acf.projects_page[1].project_tools}</h3>
                {/* <div>
                  {restData.tech_stack.map((techId) => (
                    <span key={techId}>{techId}</span>
                  ))}
                </div> */}
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
            {restData.acf.projects_page[1].see_other_projects.map(
              (projectId) => (
                <div key={projectId}>Project ID: {projectId}</div>
              )
            )}
          </section>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default SingleProject;
