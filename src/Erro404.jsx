import React from "react";
import "./Error404.css";
import layer from "./assets/Layer.png";

function Error404() {
  return (
    <div className="error-div">
      <div className="error-content">
        <h1>404-Error</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>Your search has ventured beyond the known universe.</p>
        <a
          className="back-btn"
          href="https://vikas24chauhan.github.io/MyPortfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back To Home
        </a>
      </div>
      <div className="error-img">
        <img src={layer} alt="layer image" />
      </div>
    </div>
  );
}

export default Error404;
