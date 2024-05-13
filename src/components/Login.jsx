import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../gqloperations/Mutation";

function Login() {
  const [formdata, setFormdata] = useState({ email: "", password: "" }); // Initialize with email and password fields
  const navigate = useNavigate();

  const [signinUser, { error, loading, data }] = useMutation(LOGIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      navigate("/");
    },
  });

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
    // navigate("/");
    if (!formdata.email || !formdata.password) {
      console.error("Email and password are required");
      return;
    }
    signinUser({
      variables: {
        userSignin: formdata,
      },
    });
  };

  return (
    <div className="container my-container">
      {error && <div className="red card-panel">{error.message}</div>}
      <h5>Login</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          required
          name="email"
          value={formdata.email} // Set input value to formdata.email
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          value={formdata.password} // Set input value to formdata.password
          onChange={(e) => handleChange(e)}
        />
        <Link to="/signup">
          <p>Don't have an account?</p>
        </Link>
        <button className="btn #673ab7 deep-purple" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
