import React, {useState, useEffect} from "react";
import {variables,imageMap} from "../Variables.js";
import {useNavigate} from 'react-router-dom';
import "./Login.css";

const Profile = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [interest, setInterest] = useState('')
    const [id, setId] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setEmail(userData.Email);
    setPassword(userData.Password);
    setName(userData.Name);
    setTelephone(userData.Telephone);
    setAddress(userData.Address);
    setInterest(userData.Interest);
    setId(userData.UserId);
    setRole(userData.Role);
  }, []);

const handleSave = (e) => {
    e.preventDefault();

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Email: email, Password: password, Role: role, Name: name, Telephone: telephone, Address: address, Interest: interest }),
  };

  fetch("http://localhost:8000/user/" + id, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      navigate("/profile");
      localStorage.removeItem('user');
      localStorage.setItem("user", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  return (
    <div className="login-container2">
      <h1>Profile</h1>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Telephone:</label>
          <input
            type="telephone"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interest">Interest:</label>
          <input
            type="interest"
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <button className="button2" type="submit">Save</button>
      </form>
    </div>
  );
};

export default Profile;