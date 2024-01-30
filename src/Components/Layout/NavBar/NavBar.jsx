/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/Images/Logo.png";
import About from "./../../../Pages/AboutUs/About";

const NavBar = () => {
  return (
    <div className={styles.navigationBar}>
      <nav className={styles.NavBar}>
        
          <div className={styles.todoLogo}>
          <NavLink to="/">
            <img src={logoImage} alt="ToDo" />
            <span className="todoLogoTaxt">ToDo</span>
            </NavLink>
          </div>

        <div className={styles.menu}>
          <div className={styles.homeAndAbout}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className={styles.signInAndSignUp}>
            <NavLink to="/signin">SignIn</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
