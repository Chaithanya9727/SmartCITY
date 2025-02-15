import React from "react";
import "../styles/PublicTransport.css"; // Link to the CSS file for styling

const PublicTransport = () => {
  return (
    <section className="public-transport-section">
      <div className="public-transport-header">
        <h2 className="header-title">Public Transport: The Backbone of a Sustainable City</h2>
        <p className="header-description">
          Discover how public transportation systems can enhance urban mobility, reduce traffic congestion, and lower carbon emissions.
        </p>
      </div>

      <div className="transport-solutions">
        <div className="transport-card">
          <h3>Bus Systems</h3>
          <p>
            Efficient bus systems can serve as a key solution to urban transportation problems, offering flexible routes and covering wide areas.
          </p>
        </div>
        <div className="transport-card">
          <h3>Metro Systems</h3>
          <p>
            Metro systems provide high capacity and fast travel within densely populated cities, significantly reducing road traffic.
          </p>
        </div>
        <div className="transport-card">
          <h3>Shared Mobility</h3>
          <p>
            Shared mobility services such as carpooling, bike-sharing, and ride-sharing contribute to reducing the number of vehicles on the roads.
          </p>
        </div>
      </div>

      <div className="cta-container">
        <button className="cta-button">Learn More About Public Transport</button>
      </div>
    </section>
  );
};

export default PublicTransport;
