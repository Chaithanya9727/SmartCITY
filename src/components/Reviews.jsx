import React from "react";
import "../styles/Reviews.css"; // Link to the CSS file for styling

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2>User Reviews</h2>
        <p>Read what our users say about the experience and impact of City Pulse.</p>
      </div>

      <div className="reviews-cards">
        {/* Review 1 */}
        <div className="review-card">
          <img
            src="https://surl.li/muwijx"
            alt="User Avatar"
            className="review-avatar"
          />
          <div className="review-content">
            <h3>John Doe</h3>
            <p className="review-rating">⭐⭐⭐⭐⭐</p>
            <p className="review-text">
              "City Pulse has completely transformed how we navigate our city! The real-time traffic updates and public transport data are incredibly useful. Highly recommend it!"
            </p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="review-card">
          <img
            src="https://surl.li/ijcdch"
            alt="User Avatar"
            className="review-avatar"
          />
          <div className="review-content">
            <h3>Jane Smith</h3>
            <p className="review-rating">⭐⭐⭐⭐⭐</p>
            <p className="review-text">
              "I love the design of the app! It's so easy to use and the data on air quality and energy consumption has been incredibly insightful."
            </p>
          </div>
        </div>

        {/* Review 3 */}
        <div className="review-card">
          <img
            src="https://surl.li/ghavxn"
            alt="User Avatar"
            className="review-avatar"
          />
          <div className="review-content">
            <h3>Michael Brown</h3>
            <p className="review-rating">⭐⭐⭐⭐</p>
            <p className="review-text">
              "Great app overall, but I would love to see more detailed information about the energy consumption in my area."
            </p>
          </div>
        </div>
        {/* Review 4 */}
        <div className="review-card">
          <img
            src="https://surl.li/xsfipu"
            alt="User Avatar"
            className="review-avatar"
          />
          <div className="review-content">
            <h3>Taylor Jason</h3>
            <p className="review-rating">⭐⭐⭐</p>
            <p className="review-text">
              "Nice app, but the public transport data is not always accurate. It would be great to see more real-time updates."
            </p>
          </div>
        </div>
      </div>

      <div className="reviews-cta">
        <button className="cta-button">Share Your Review</button>
      </div>
    </section>
  );
};

export default Reviews;
