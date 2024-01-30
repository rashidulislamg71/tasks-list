/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styles from "./Footer.module.css";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import footerLogo from "../../../assets/Images/Logo.png"

const Footer = () => {
  return (
    <div className={styles.footerSection}>
      <footer className={styles.footer}>
        <div className={`${styles.navLogo} ${styles.footerLogo}` }>
          <img src={footerLogo} alt="HALAL JIBIKA" />
        </div>
        <div className={styles.footer_column}>
          
          <h2>Contact Us</h2>
          <div className={styles.social_icons}>
            <a href="#" target="_blank">
              <FaInstagramSquare />
            </a>
            <a href="https://www.linkedin.com/in/rashidulislam7/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/rashidulislam72/" target="_blank">
              <FaSquareFacebook />
            </a>

            <a href="#" target="_blank">
              <FaSquareTwitter />
            </a>
            <a href="#" target="_blank">
              <BsDiscord />
            </a>
            
          </div>
          <ul>
            <li> <a href="#">123 Street, Dhaka, Bangladesh</a></li>
            <li>Email: <a href="#">jrashidulislam0103@gmail.com</a>  </li>
            <li> Phone: <a href="#">+880173400071</a></li>
          </ul>
        </div>

        <div className={styles.footer_column}>
          {/* Jobs Categories */}
          <h2>Jobs Categories</h2>
          <ul>
            <li>
              <a href="#">IT</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Engineering</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_column}>
          {/* Remote Jobs */}
          <h2>Remote Jobs</h2>
          <ul>
            <li>
              <a href="#">Software Developer</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Financial Analyst</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_column}>
          {/* Privacy & Policy */}
          <h2>Privacy & Policy</h2>
          <ul>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerHr} />
        <div className={styles.footer_bottom}>
          <p>&copy; 2024 Your Company. All rights reserved by Rashidul Islam Rashed.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
