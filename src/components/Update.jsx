import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [number, setNumber] = useState(" ");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setNumber(localStorage.getItem("contact"));
  }, []);

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
    axios
      .put(
        `https://sugabackend.azurewebsites.net/api/crud_assignment/${localStorage.getItem(
          "id"
        )}`,{
            name: name,
            email: email,
            contact: number
        }
      )
      .then(function() {
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
            value={name}
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
            value={email}
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
            value={number}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
