import React from "react";
import "../styles/Projects.css"; // Link to the CSS file for styling

const Projects = () => {
  const projectData = [
    {
      title: "Smart Traffic Management",
      description:
        "A project aimed at using real-time data and AI to optimize traffic flow and reduce congestion in urban areas.",
      imageUrl: "https://surl.li/exlmvb",
      link: "/traffic-management",
      logo: "https://surl.li/exlmvb", // Replace with actual logo URL
    },
    {
      title: "Public Transport Efficiency",
      description:
        "A project focusing on improving the efficiency and coverage of public transport networks to reduce road traffic and emissions.",
      imageUrl: "https://surl.li/fkwgdx",
      link: "/public-transport",
      logo: "https://surl.li/fkwgdx", // Replace with actual logo URL
    },
    {
      title: "Sustainable Urban Development",
      description:
        "A project aimed at implementing sustainable and eco-friendly urban development practices to create livable cities for the future.",
      imageUrl: "https://surli.cc/qsqucm",
      link: "/sustainable-development",
      logo: "https://surli.cc/qsqucm", // Replace with actual logo URL
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Our Innovative Projects</h2>
      <p className="projects-description">
        Explore some of the exciting projects we're working on to make cities
        smarter, more sustainable, and more efficient.
      </p>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <div className="project-logo">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="project-logo-img"
                />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
