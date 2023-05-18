import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [number, setNumber] = useState(" ");

  const editName = function(event) {
    setName(event.target.value);
  };
  const editEmail = function(event) {
    setEmail(event.target.value);
  };
  const editNumber = function(event) {
    setNumber(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = function(event) {
    event.preventDefault();
    axios({
      method: "post",
      url: "https://sugabackend.azurewebsites.net/api/crud_assignment",
      data: {
        name: name,
        email: email,
        contact: number,
      },
    }).then(function() {
      navigate("/");
    });
  };
  return (
    <div className="p-3 col-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Name:</label>
          <br />
          <input
            className="form-control"
            type="text"
            onChange={editName}
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Email:</label>
          <br />
          <input
            className="form-control"
            type="email"
            onChange={editEmail}
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Number:</label>
          <br />
          <input
            className="form-control"
            type="number"
            onChange={editNumber}
            placeholder="Phone Number"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
