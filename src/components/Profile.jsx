import React from "react";

function Profile() {
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src="https://robohash.org/ram.png?size=200x200"
          alt=""
        />
        <h5>Mukesh</h5>
        <h5>Email-abc@gmail.com</h5>
      </div>
      <h4>Your Quotes</h4>
      <blockquote>
        <h6>if it works don't touch it</h6>
        <p className="right-align">ram</p>
      </blockquote>
      <blockquote>
        <h6>if it works don't touch it</h6>
        <p className="right-align">ram</p>
      </blockquote>
    </div>
  );
}

export default Profile;
