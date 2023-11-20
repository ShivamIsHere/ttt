import React from "react";

const Profile2 = () => {
  return (
    <div className="profile-container">
      {/* Background */}
      <div className="background-container">
        <img
          src={require("./Assets/image/bridge.jpg")}
          alt="Sample"
          className="background-image"
        />
      </div>

      {/* Details */}
      <div className="details-container">
        {/* Profile Info */}
        <div className="profile-info-container">
          {/* Info Row 1 */}
          <div className="info-row">
            <h5>Anuj Gosalia</h5>
            <img
              src={require("./Assets/image/icons8-diamond-50.png")}
              alt="Sample"
              className="info-icon"
            />
            <img
              src={require("./Assets/image/icons8-check-50.png")}
              alt="Sample"
              className="info-icon"
            />
          </div>

          {/* Info Row 2 */}
          <div className="info-row">
            {/* Part 1 */}
            <div className="info-part">
              <div className="info-stat">6482</div>
              <span className="info-label">Followers</span>
            </div>

            {/* Part 2 */}
            <div className="info-part">
              <div className="info-stat">245</div>
              <span className="info-label">Following</span>
            </div>
          </div>
        </div>

        {/* Profile Link */}
        <div className="profile-link-container">
          <div className="profile-description">
            Co-founder & CEO at Terribly Tiny Tales
          </div>

          <div className="profile-website">
            <a href="www.google.com" className="website-link">
              www.google.com
            </a>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <img
                src={require("./Assets/image/icons8-star-32.png")}
                alt="Sample"
                className="stat-icon"
              />
              <span>125</span>
            </div>
            <div className="stat-item">
              <img
                src={require("./Assets/image/icons8-like-80.png")}
                alt="Sample"
                className="stat-icon"
              />
              <span>12</span>
            </div>
            <div className="stat-item">
              <img
                src={require("./Assets/image/icons8-eye-24.png")}
                alt="Sample"
                className="stat-icon"
              />
              <span>57.8K</span>
            </div>
            <div className="stat-item">
              <img
                src={require("./Assets/image/icons8-heart-24.png")}
                alt="Sample"
                className="stat-icon"
              />
              <span>26.0K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Your Image */}
      <div className="profile-image-container">
        <img
          src={require("./Assets/image/TTT1.png")}
          alt="Sample"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Profile2;
