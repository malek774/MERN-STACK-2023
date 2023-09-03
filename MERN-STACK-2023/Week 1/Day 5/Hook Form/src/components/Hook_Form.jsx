import React from 'react';
import { useState } from 'react';

const Hook_Form = (props) => {
  const [First_name, setFirst_name] = useState("");
  const [Last_name, setLast_name] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");  
  const [Confirm_Password, setConfirm_Password] = useState(""); 
  
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { First_name, Last_name, Email, Password, Confirm_Password };
    console.log("Welcome", newUser);
  };
  
  return (
    <form onSubmit={createUser} className="container mt-4 col-4">
      <div className="mb-3">
        <label className="form-label">First Name:</label> 
        <input type="text" className="form-control" onChange={(e) => setFirst_name(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name:</label> 
        <input type="text" className="form-control" onChange={(e) => setLast_name(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email Address:</label> 
        <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Confirm Password:</label>
        <input type="password" className="form-control" onChange={(e) => setConfirm_Password(e.target.value)} />
      </div>
      
      <div className="mt-4">
        <p>Your Form Data:</p>
        <p>First Name: {First_name}</p>
        <p>Last Name: {Last_name}</p>
        <p>Email: {Email}</p>
        <p>Password: {Password}</p>
        <p>Confirm Password: {Confirm_Password}</p>
      </div>
    </form>
  );
};

export default Hook_Form;
