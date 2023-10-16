import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Logo from '../images/logo.png';
import {useNavigate} from 'react-router-dom';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

const navigate = useNavigate();

    const logoutBtn = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('location');
      navigate("/");
    }

    const seeProfile = () => {
      navigate("/profile");
    }

    const adminButton = () => {
      navigate("/admin");
    }

    const visitButton = () => {
      navigate("/visit");
    }

    const userRole = JSON.parse(localStorage.getItem("user"))?.Role;

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img className="house-logo" src={Logo} width="150" height="100"/>
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Sales") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            else if (item.title === "Rentals") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown2 && <Dropdown2 />}
                </li>
              );
            }

            return (
            <div>
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
              </div>
            );
          })}

          {(localStorage.getItem("user")) && (
               <li className="nav-item-profile" onClick={seeProfile}>
                  Profile
               </li>
          )}
          {(localStorage.getItem("user")) && (
               <li className="nav-item-logout" onClick={logoutBtn}>
                  Logout
               </li>
          )}

              {userRole === 'admin' && (
                <li className="nav-item-admin" onClick={adminButton}>
                  Admin
                </li>
              )}

              {userRole === 'client' && (
                <li className="nav-item-profile" onClick={visitButton}>
                  Visit
                </li>
              )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
