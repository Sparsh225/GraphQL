import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_QUOTE } from "../gqloperations/Mutation";
import { GET_ALL_QUOTES } from "../gqloperations/Queries";
import { useNavigate } from "react-router-dom";
function CreateQuote() {
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();
  const [createQuote, { data, loading, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries: ["getMyProfile", "getAllQuotes"],
  });

  if (!localStorage.getItem("token")) {
    navigate("/login");
    return <h1>Unathoirzed</h1>;
  }
  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }

  if (data) {
    console.log(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
    createQuote({
      variables: {
        name: quote,
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

      {data && <div className="green card-panel">{data.createQuote}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="write your Quote here"
        />
        <button className="btn green">create</button>
      </form>
    </div>
  );
}

export default CreateQuote;
