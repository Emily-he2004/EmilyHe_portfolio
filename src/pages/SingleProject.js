import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

function SingleProject({ restBase }) {
  const { slug } = useParams();
  const restPath = `${restBase}projects?slug=${slug}`;
  const [restData, setData] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [isLoaded, setLoadStatus] = useState(false);

  const [mediaURLs, setMediaUrls] = useState([]);

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

    const fetchMediaUrls = async () => {
      try {
        const mediaUrls = await Promise.all(
          restData.acf.projects_page[0].project_gallery.map(async (itemId) => {
            const mediaResponse = await fetch(`${restBase}media/${itemId}`);
            if (!mediaResponse.ok) {
              throw new Error("Failed to fetch media URL");
            }
            const mediaData = await mediaResponse.json();
            return mediaData.source_url;
          })
        );
        setMediaUrls(mediaUrls);
      } catch (error) {
        console.error("Error fetching media URLs:", error);
        setMediaUrls([]);
      }
    };
    fetchData();
  }, [restPath, restBase, restData.acf]);

  return (
    <>
      {isLoaded ? (
        <section id="single-project-page" className="single-project-page">
          <section className="project-media">
            {mediaURLs.map((url, index) => {
              if (url.endsWith(".mp4")) {
                return (
                  <video key={index} controls>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                );
              } else if (url.endsWith(".jpg") || url.endsWith(".png")) {
                return (
                  <img
                    key={index}
                    src={url}
                    alt={`Project Image ${index + 1}`}
                  />
                );
              } else {
                return null;
              }
            })}
          </section>

          <section className="introduction">
            <div className="title-ctas">
              <h1>{restData.acf.projects_page[0].project_title}</h1>
              <div className="single-externals">
                <a
                  href={restData.acf.projects_page[0].project_github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="single-github-cta"
                >
                  GitHub <FaGithub />
                </a>
                <a
                  href={restData.acf.projects_page[0].project_live_site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="single-live-cta"
                >
                  Live Site <HiExternalLink />
                </a>
              </div>
            </div>

            <div className="brief-info">
              <div className="overview">
                <h2>{restData.acf.projects_page[0].project_overview}</h2>
                <p>{restData.acf.projects_page[0].project_overview_content}</p>
              </div>
              <div className="specifications">
                <div className="roles">
                  <h3>{restData.acf.projects_page[0].project_roles}</h3>
                  <p>{restData.acf.projects_page[0].project_roles_content}</p>
                </div>
                <div className="tools">
                  {/* <span className="divider"></span> */}
                  <h3>{restData.acf.projects_page[0].project_tools}</h3>
                  <p>
                    {restData.acf.projects_page[0].tools_content.my_tech_stack}
                  </p>
                </div>
                {/* <div>
                  {restData.tech_stack.map((techId) => (
                    <span key={techId}>{techId}</span>
                  ))}
                </div> */}
              </div>
            </div>
          </section>

          <section className="in-depth-info">
            <div className="tab-container">
              <div
                className={`tab-section ${activeTab === 0 ? "active" : ""}`}
                onClick={() => setActiveTab(0)}
              >
                <h3 className="tab-togglers">
                  {
                    restData.acf.projects_page[0].project_info_content[0]
                      .project_topic
                  }
                </h3>
                <div className="tab-content">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        restData.acf.projects_page[0].project_info_content[0]
                          .topic_content,
                    }}
                  />
                </div>
              </div>
              <div
                className={`tab-section ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                <h3 className="tab-togglers">
                  {
                    restData.acf.projects_page[0].project_info_content[1]
                      .project_topic
                  }
                </h3>
                <div className="tab-content">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        restData.acf.projects_page[0].project_info_content[1]
                          .topic_content,
                    }}
                  />
                </div>
              </div>
              <div
                className={`tab-section ${activeTab === 2 ? "active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                <h3 className="tab-togglers">
                  {
                    restData.acf.projects_page[0].project_info_content[2]
                      .project_topic
                  }
                </h3>
                <div className="tab-content">
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        restData.acf.projects_page[0].project_info_content[2]
                          .topic_content,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="see-other-projects">
            {restData.acf.projects_page[0].see_other_projects.map(
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
