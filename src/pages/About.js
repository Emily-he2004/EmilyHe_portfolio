import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";

function About({ restBase }) {
  const AboutID = "11";
  const restPath = `${restBase}pages/${AboutID}`;
  const [restData, setData] = useState({});
  const [isLoaded, setLoadStatus] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(restPath);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setLoadStatus(true);
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

  return (
    <>
      {isLoaded ? (
        <div className="about-page">
          <div className="about-me-section">
            <div>{restData.acf.about_page[0].profile_picture}</div>
            <h1>{restData.acf.about_page[0].about_me_title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: restData.acf.about_page[0].about_me_content,
              }}
            ></div>
            <h2>{restData.acf.about_page[0].interests_and_hobbies_title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: restData.acf.about_page[0].interests_and_hobbies_content,
              }}
            ></div>
          </div>

          {restData.acf.about_page[1] && (
            <div className="tech-stack">
              <h2>{restData.acf.about_page[1].tech_stack_title}</h2>
              <div className="development-stack">
                <p>{restData.acf.about_page[1].all_development_stack_title}</p>
                <p></p>
              </div>
              <div className="design-stack">
                <p>{restData.acf.about_page[1].all_design_stack_title}</p>
                <p></p>
              </div>
            </div>
          )}

          {restData.acf.about_page[2] && (
            <>
              <h2>
                {restData.acf.about_page[2].upcoming_projects_section_title}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: restData.acf.about_page[2].upcoming_projects_content,
                }}
              ></div>
            </>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default About;
