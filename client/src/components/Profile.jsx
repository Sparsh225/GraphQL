import { useQuery } from "@apollo/client";
import React from "react";
import { GET_MY_PROFILE } from "../gqloperations/Queries";
import { useNavigate } from "react-router-dom";
function Profile() {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1>Unauthorized</h1>;
  }
  if (error) {
    console.log(error);
  }

  if (loading) {
    //  console.log(data);
    return <h1>Profile is Loading..</h1>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt=""
        />
        <h5>
          {data.user.firstName} {data.user.lastName}
        </h5>
        <h5>{data.user.email}</h5>
      </div>
      <h4>Your Quotes</h4>
      {data.user.quotes.map((quote) => {
        return (
          <blockquote>
            <h6>{quote.name}</h6>
          </blockquote>
        );
      })}
    </div>
  );
}

export default Profile;
