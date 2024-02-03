/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-scroll";
import logoImage from "../../../assets/Images/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navigationBar}>
      <nav className={styles.NavBar}>
        <input
          type="checkbox"
          id="check"
          className={styles.checkbox}
          checked={isMenuOpen}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="check" className={styles.showMenu}>
          <RxHamburgerMenu />
        </label>
        <div className={styles.todoLogo}>
          <Link smooth to="home">
            <img src={logoImage} alt="ToDo" />
            <span className="todoLogoTaxt">ToDo</span>
          </Link>
        </div>

        <div className={styles.menu}>
          <div className={styles.homeAndAbout}>
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={200}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="addTask"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={200}
                >
                  Add Task
                </Link>
              </li>

              <li>
                <Link
                  to="tasksList"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={200}
                >
                  Tasks List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;