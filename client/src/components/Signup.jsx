import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_USER } from "../gqloperations/Mutation";
function Signup() {
  const [formdata, setFormdata] = useState({});

  const [signupUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    signupUser({
      variables: {
        userNew: formdata,
      },
    });
  };
  return (
    <div className="container my-container">
      {error && (
        <div
          className="red card-panel"
          style={{ padding: "10px", margin: "5px" }}
        >
          {error.message}
        </div>
      )}
      {data && data.user && (
        <div
          className="green card-panel"
          style={{ padding: "10px", margin: "5px" }}
        >
          {data.user.firstName} is Signed Up .You can Login now
        </div>
      )}
      <h5>Sign Up</h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="First Name"
          required
          name="firstName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="last Name"
          required
          name="lastName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Link to="/login">
          <p>Already have an account?</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
