import React, {useState, useEffect} from "react";
import {variables,imageMap} from "../Variables.js";
import {useNavigate} from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Email: email, Password: password }),
  };

  fetch("http://localhost:8000/user/login", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data)
      {
      localStorage.setItem("user", JSON.stringify(data));

        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            localStorage.setItem("location", JSON.stringify(userLocation));
          },
          (error) => {
            console.log(error);
          }
        );
      }

      const userData = JSON.parse(localStorage.getItem("user"));
      const userRole = userData.Role;
      if (userRole === "admin")
      {navigate("/admin");}
      else if (userRole === "client")
      {navigate("/news");}
      else {navigate("/");};
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

  return (
    <div className="login-container2">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button className="button2" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;