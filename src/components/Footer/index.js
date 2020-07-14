import React from "react";
import "./Footer.css";
import githubImg from "../../images/github-image.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <p>
          This project was develop with React, <br /> and themoviedb.org api.{" "}
        </p>
      </div>
      <div className="content">
        <p> See my GitHub: </p>
        <a
          href="https://github.com/MilaRCDias/movie-finder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="github" className="git" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
