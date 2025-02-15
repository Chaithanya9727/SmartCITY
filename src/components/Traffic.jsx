import React from "react";
import "../styles/Traffic.css"; 
import "../components/NavBar"// Link to the CSS file for styling

const Traffic = () => {
  return (
    <section className="traffic-section">
      <div className="traffic-header">
        <h2>Traffic Congestion: A Growing Problem</h2>
        <p>
          Cities worldwide are facing the challenge of traffic congestion. 
          Learn about the causes, effects, and possible solutions to mitigate the problem.
        </p>
      </div>

      <div className="traffic-details">
        {/* Traffic Causes */}
        <div className="traffic-card">
          <h3>Causes of Traffic Congestion</h3>
          <p>
            Overpopulation, inadequate public transport, road construction, and 
            poorly planned urban infrastructure are some of the primary causes of traffic jams.
          </p>
        </div>

        {/* Traffic Effects */}
        <div className="traffic-card">
          <h3>Effects of Traffic Congestion</h3>
          <p>
            Traffic congestion has a profound impact on the environment, economy, and health of the urban population.
          </p>
          <ul>
            
          </ul>
        </div>

        {/* Solutions to Traffic Congestion */}
        <div className="traffic-card">
          <h3>Possible Solutions</h3>
          <p>
            Several solutions can reduce traffic congestion, such as better public transport, carpooling, and smart traffic management.
          </p>
          <ul>
            
          </ul>
        </div>
        
        {/* Additional Section: Innovative Solutions */}
        <div className="traffic-card">
          <h3>Innovative Solutions to Combat Traffic Congestion</h3>
          <p>
            In addition to traditional methods, innovative technologies are helping cities manage traffic more efficiently.
          </p>
          <ul>
            
          </ul>
        </div>
      </div>

      <div className="traffic-cta">
        <button className="cta-button">Learn More About Solutions</button>
      </div>
    </section>
  );
};

export default Traffic;
