import React from "react";
import "../styles/Ideas.css"; // Import CSS for Ideas Component

const Ideas = () => {
  const ideas = [
    {
      title: "Smart Traffic Management",
      description:
        "Implement AI-based solutions to optimize traffic flow and reduce congestion.",
      icon: "🚦",
    },
    {
      title: "Green Energy Solutions",
      description:
        "Incorporate renewable energy sources like solar and wind into city grids.",
      icon: "🌱",
    },
    {
      title: "Public Transport Integration",
      description:
        "Create an integrated platform for real-time monitoring of public transport systems.",
      icon: "🚌",
    },
    {
      title: "Urban Farming Initiatives",
      description:
        "Promote urban farming practices to enhance local food production and sustainability.",
      icon: "🌾",
    },
  ];

  return (
    <section className="ideas-section">
      <div className="ideas-header">
        <h2>Innovative Ideas for Smart Cities</h2>
        <p>Explore some of the innovative ideas that can revolutionize urban living.</p>
      </div>

      <div className="ideas-cards">
        {ideas.map((idea, index) => (
          <div className="idea-card" key={index}>
            <div className="idea-card-icon">{idea.icon}</div>
            <h3 className="idea-card-title">{idea.title}</h3>
            <p className="idea-card-description">{idea.description}</p>
            <button className="idea-card-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ideas;
