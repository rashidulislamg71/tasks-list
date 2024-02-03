/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import addTodoImage from "../../assets/Images/animation gif.gif";
import TaskInput from "../../Components/TaskInput/TaskInput";
import NavBar from "../../Components/Layout/NavBar/NavBar";
import Footer from "../../Components/Layout/Footer/Footer";

const Home = () => {

  const [text, setText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const speed = 40; // Typing speed in milliseconds

  const fullText = `"Do you know? You are a successful and dedicated person. Don't be upset or demotivated by anything. You can achieve anything you set your mind to. Everything is possible with you. Keep pushing yourself, and remember, your potential is limitless. Try more, learn more, and grow more. Embrace challenges, as they are stepping stones to your success."`;

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    // Update displayed text when 'text' changes
    setDisplayedText(text);
  }, [text]);

  return (
    <div id="home">
      <NavBar />
      <div className={styles.heroSection}>
        <div className={styles.bannerImage}>
          <img src={addTodoImage} alt="Add Todo List" />
        </div>

        <div className={styles.HomeContent}>
          <div className={styles.title}>
            <h3>Don't waste time.</h3>
          </div>

          <div className={styles.motivation_Text}>
            <p>{displayedText}</p>
          </div>
        </div>
      </div>

      <TaskInput />
      <Footer />
    </div>
  );
};

export default Home;
