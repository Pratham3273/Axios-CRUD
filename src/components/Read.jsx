import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Read() {
  const url = "https://sugabackend.azurewebsites.net/api/crud_assignment";
  const [data, setData] = useState([]);
  var number = 0;
  const navigate = useNavigate();
  useEffect(function() {
    axios.get(url).then(function(res) {
      setData(res.data);
    });
  }, []);

  const addEmployee = function(){
    navigate('/Create');
  }

  const performUpdate = function(id,name,email,contact){
            localStorage.setItem('id', id);
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('contact', contact);
        navigate('/Update')

  }

  const performDelete = function(id){
    axios.delete(`https://sugabackend.azurewebsites.net/api/crud_assignment/${id}`)
    .then(
        axios.get(url).then(function(res) {
            setData(res.data);
        }))
    .then(navigate(0));
  }

  return (
    <>
    <h1>Employee Management Software</h1>
    <button className="btn btn-lg btn-primary maj" onClick={addEmployee}>Add Employee</button>
    <button className="btn btn-lg btn-outline-dark maj pa">Logout</button>
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(function(element) {
              return (
                <tr>
                  <td>{++number}</td>
                  <td>{element.name}</td>
                  <td>{element.email}</td>
                  <td>{element.contact}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => performUpdate(element._id,element.name,element.email,element.contact)}>Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => performDelete(element._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Read;
