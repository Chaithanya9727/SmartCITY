import React from "react";
import "../styles/CitiesProblems.css"; // Link to the CSS file

const CityProblems = () => {
  return (
    <section className="city-problems">
      <h2>Major City Problems</h2>
      <p>
        Urban areas face numerous challenges that need innovative solutions. 
        Here are some of the most pressing issues our cities face today:
      </p>

      <div className="problem-cards">
        {/* Problem 1: Traffic Congestion */}
        <div className="problem-card">
          <img
            src="https://img.icons8.com/ios/452/traffic-jam.png"
            alt="Traffic Congestion"
          />
          <h3>Traffic Congestion</h3>
          <p>
            Overcrowded roads and highways lead to significant delays, increased
            pollution, and higher stress levels for commuters.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Problem 2: Pollution */}
        <div className="problem-card">
          <img
            src="https://img.icons8.com/ios/452/environment.png"
            alt="Pollution"
          />
          <h3>Pollution</h3>
          <p>
            Air and water pollution are serious threats to human health and
            biodiversity, worsening the quality of life in urban areas.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Problem 3: Affordable Housing */}
        <div className="problem-card">
          <img
            src="https://surl.li/mtedvy"
            alt="Affordable Housing"
          />
          <h3>Affordable Housing</h3>
          <p>
            Rising real estate prices make it increasingly difficult for lower and
            middle-income families to secure affordable housing in major cities.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Problem 4: Public Safety */}
        <div className="problem-card">
          <img
            src="https://surl.li/vaglzm"
            alt="Public Safety"
          />
          <h3>Public Safety</h3>
          <p>
            Ensuring the safety of citizens and protecting them from crime is a
            major concern for cities worldwide.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Problem 5: Waste Management */}
        <div className="problem-card">
          <img
            src="https://surl.li/mpoqvz"
            alt="Waste Management"
          />
          <h3>Waste Management</h3>
          <p>
            Proper disposal and recycling of waste are critical to preventing
            environmental pollution and maintaining cleanliness in urban areas.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* Problem 6: Traffic Accidents */}
        <div className="problem-card">
          <img
            src="https://surl.li/loukzl"
            alt="Traffic Accidents"
          />
          <h3>Traffic Accidents</h3>
          <p>
            Traffic accidents lead to injuries, fatalities, and costly repairs,
            contributing to urban transportation challenges.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CityProblems;
