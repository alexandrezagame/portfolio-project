/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ahoy from "../images/ahoy.png";
import crypto from "../images/crypto-app.png";
import primetime from "../images/primetime.png";
import fleapit from "../images/fleapit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxAhoy = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={ahoy} alt="ahoy app" />
        <h3>Description</h3>
        <p>
          AHOY is a Dashboard as a Service (DaaS). We aimed to create a digital
          office where you can find the things you need in one place. We wanted
          to focus on how to onboard remotely and how to bring back the social
          aspect of working.
        </p>
        <h3>Technology</h3>
        <p>
          AHOY uses React, Redux and Firebase to store the data of our users,
          documents and other neccessary information.
        </p>
        <h3>Features</h3>
        <p>
          Some of our features include a live chat, a virtual fika widget, a
          Google-connected calendar, a department page, a pong-game, admin
          panel, latest hires, an an original design.
        </p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://github.com/alexandrezagame/AHOY")}
        >
          Ahoy project
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigAhoy = {
    titleBar: {
      enable: true,
      text: "Ahoy project: DaaS",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxCrypto = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={crypto}
          alt="crypto app"
        />
        <h3>Description</h3>
        <p>
          Digital Destiny is a one day project where I use the Coin Gecko api to
          fetch the 100 coins with the highest MKT Cap. Price updates happen
          every 5 seconds (limit set to 100 requests per minute). In this app I
          have also chosen to display the price difference over 24hrs and over
          1year. But as well display the investment value of someone having
          invested 1K$ 1 year ago.
        </p>
        <h3>Technology</h3>
        <p>DT uses React, Express and Axios along with the CoinGecko API</p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/alexandrezagame/hackday-stock-market-app"
            )
          }
        >
          Digital Destiny
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCrypto = {
    titleBar: {
      enable: true,
      text: "Digital Destiny: crypto app",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxPrimetime = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={primetime}
          alt="Client website"
        />
        <h3>Description</h3>
        <p>
          Website created for a Paris based company aiming at promoting
          intercultural and commercial exchanges between France and Korea,
          Primetime showcasts its future and past events for potential clients.
          Future improvments will include a booking system. The client wanted a
          style minimalist.
        </p>
        <h3>Technology</h3>
        <p>
          Primetime uses Ruby on Rails, JS, Heroku, postgresql, and Cloudinary
          to store images.
        </p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/FAR-Fullstack/PrimeTime")
          }
        >
          Primetime
        </a>
        <br></br>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("http://www.primetimefr.com/")}
        >
          Primetime
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPrimetime = {
    titleBar: {
      enable: true,
      text: "Primetime: french event company",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxFleapit = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={fleapit}
          alt="non-monetary exchange platform"
        />
        <h3>Description</h3>
        <p>
          Cross-breed between Ebay, Tinder and a traditional flea-market, but
          non-monetary. The focus is to create a platform where users can
          exchange things they have at home with items of other users with an
          equivalent value range. The user registers on Fleapit, adds a first
          item and starts swiping left (dislike) or right (like) on other users’
          objects based on a similar value. When two users like each other’s
          items a match happens and a chat becomes accessible to accept or not
          the trade.
        </p>
        <h3>Technology</h3>
        <p>
          Primetime uses Ruby on Rails, JS, Heroku, postgresql, and Cloudinary
          to store images.
        </p>
        <b>Github:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/alexandrezagame/fleapit")
          }
        >
          Fleapit
        </a>
        <br></br>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("http://www.fleapit.net")}
        >
          Fleapit
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFleapit = {
    titleBar: {
      enable: true,
      text: "Fleapit: non-monetary exchange platform",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wraper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wraper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxAhoy}>
            <img className="portfolio-image" src={ahoy} alt="ahoy app" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
            <img className="portfolio-image" src={crypto} alt="crypto app" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxPrimetime}>
            <img
              className="portfolio-image"
              src={primetime}
              alt="Primetime client website"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxFleapit}>
            <img
              className="portfolio-image"
              src={fleapit}
              alt="Fleapit: non-monetary exchange platform"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigAhoy} />
      <PopupboxContainer {...popupboxConfigCrypto} />
      <PopupboxContainer {...popupboxConfigPrimetime} />
      <PopupboxContainer {...popupboxConfigFleapit} />
    </div>
  );
};

export default Portfolio;
