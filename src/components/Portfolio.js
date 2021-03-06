/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../stylesheets/Projects.css';
import monity from '../images/monity.png';
import news from '../images/news.png';
import memories from '../images/memorygo.png';
import ecommerce from '../images/ecommerce.png';
import covid from '../images/covid.png';
import ahoy from '../images/ahoy.png';
import crypto from '../images/dd.gif';
import primetime from '../images/primetime.png';
import fleapit from '../images/fleapit.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  const openPopupboxMonity = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={monity}
          alt="Bank data aggregator"
        />
        <h3>Description</h3>
        <p>
          This is a web app integrating the Tink API to fetch users' account and
          transaction data.
          <br></br>
          <b>Top expenses:</b> Displays all the data labeled as 'EXPENSES' by
          your bank.
          <br></br>
          <b>Most Recurrent Merchant:</b> Displays the merchant where you have
          spent the most number of times. Not the most amount of money.
          <br></br>
          <b>Top 5 Merchants:</b> Displays the 5 merchants where you have spent
          the most amount of money.
          <br></br>
          <b>Top Merchants per Category:</b> Displays the merchants where you
          have spent the most amount of money per category. Expenses are
          categorized by your bank automatically. Some categories wont have any
          expenses due to lack of data from your bank.
        </p>
        <h3>Technology</h3>
        <p>
          Tink API developer account, React, Material UI, ChartsJS, Clearbit API
          (to fetch the logos) for the frontend and Express on the backend,
          deployed on Netlify
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open(
              'https://github.com/alexandrezagame/bankdata-aggregator'
            )
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://monity.netlify.app/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };
  const openPopupboxNewspaper = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={news}
          alt="Newspaper api project"
        />
        <h3>Description</h3>
        <p>
          The API Newspaper is a news application built using ReactJS and
          NewsAPI that helps list news articles from various sources. I wanted
          this project to have a look and feel of a classic paper newspaper.
        </p>
        <h3>Technology</h3>
        <p>
          React Context API, React Hooks, Axios, newsApi.ai, deployed on Netlify
        </p>
        <h3>Future implementations</h3>
        <p>-search functionality</p>
        <p>-pagination</p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open('https://github.com/alexandrezagame/news-api-app')
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://theapinewspaper.netlify.app/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxMemories = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={memories}
          alt="Share memories app"
        />
        <h3>Description</h3>
        <p>
          The App is called "Memorygo" and it is a simple social media MERN
          application that allows users to post interesting events that happened
          in their lives and like other people posts.
        </p>
        <h3>Technology</h3>
        <p>
          I am using React, Node.js, Express & MongoDB to build a Full Stack
          MERN Project. I am deploying my database, frontend and backend on
          Zeet.co
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open(
              'https://github.com/alexandrezagame/social-media-mern-app'
            )
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://memorygo.zeet.app')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxCommerce = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={ecommerce}
          alt="E Commerce app"
        />
        <h3>Description</h3>
        <p>
          Shopay is an E-Commerce website built using Commercejs. Commercejs is
          a fast, powerful, and easy to use JavaScript SDK for building and
          managing carts, checkouts and receipts using the Chec API. The aim of
          this project was to set up an e-commerce website that is easy and fast
          to deploy by using the commercejs dashboard.
        </p>
        <h3>Technology</h3>
        <p>
          Shopay uses React, CommerceJS, Stripe to handle the payments, Material
          UI and Netlify to deploy the application.
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open('https://github.com/alexandrezagame/ecommerce-react')
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://shopay.netlify.app/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };

  const openPopupboxCovid = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={covid} alt="Covid app" />
        <h3>Description</h3>
        <p>
          Corona Virus is, unfortunately, spreading through the entire world.
          What can we, as developers, do to make the situation better? We can
          help to spread awareness by visualizing the data. The data is fetched
          from the API and we'll create cards displaying the statistics as well
          as Charts.
        </p>
        <h3>Technology</h3>
        <p>
          Covid19 uses React, Axios to fetch the api, @Mathdroid-api to track
          the daily numbers, Chartjs to display the chart and bar, Material UI
          and Netlify to deploy the application.
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open('https://github.com/alexandrezagame/covid19')
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://covid19-az.netlify.app/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };

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
          panel, latest hires, and a drag&drop customization of the dashboard.
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://github.com/alexandrezagame/AHOY')}
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://vimeo.com/502096538')}
        >
          Demo
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://ahoy-9a920.web.app/signin')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
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
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open(
              'https://github.com/alexandrezagame/hackday-stock-market-app'
            )
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('https://digital-destiny.netlify.app/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
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
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open('https://github.com/FAR-Fullstack/PrimeTime')
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('http://www.primetimefr.com/')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
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
          Fleapit uses Ruby on Rails, JS, Heroku, postgresql, and Cloudinary to
          store images.
        </p>
        <button
          className="btn-main-offer btn-projects"
          onClick={() =>
            window.open('https://github.com/alexandrezagame/fleapit')
          }
        >
          Github
        </button>
        <button
          className="btn-main-offer btn-projects"
          onClick={() => window.open('http://www.fleapit.net')}
        >
          Website
        </button>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wraper">
      {/* <div className="container"> */}
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
      <div className="image-box-wraper row justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupboxMonity}>
          <h3>
            <b>Monity:</b> Bank Data Aggregator
          </h3>

          <img
            className="portfolio-image"
            src={monity}
            alt="Bank data aggregator"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        <div className="portfolio-image-box" onClick={openPopupboxNewspaper}>
          <h3>
            <b>The API Newspaper:</b> simple newspaper format
          </h3>

          <img className="portfolio-image" src={news} alt="Social media app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
        <div className="portfolio-image-box" onClick={openPopupboxMemories}>
          <h3>
            <b>Memorygo:</b> simple social media app
          </h3>

          <img
            className="portfolio-image"
            src={memories}
            alt="Social media app"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxCommerce}>
          <h3>
            <b>Shopay:</b> E-Commerce site
          </h3>

          <img
            className="portfolio-image"
            src={ecommerce}
            alt="E-commerce website"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxCovid}>
          <h3>
            <b>Covid19:</b> Corona Virus tracker
          </h3>

          <img
            className="portfolio-image"
            src={covid}
            alt="covid10 tracker app"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxAhoy}>
          <h3>
            <b>Ahoy:</b> digital onboarding
          </h3>

          <img className="portfolio-image" src={ahoy} alt="ahoy app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
          <h3>
            <b>Digital Destiny:</b> crypto currency tracker
          </h3>
          <img className="portfolio-image" src={crypto} alt="crypto app" />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxPrimetime}>
          <h3>
            <b>Primetime:</b> Paris based event company
          </h3>
          <img
            className="portfolio-image"
            src={primetime}
            alt="Primetime client website"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>

        <div className="portfolio-image-box" onClick={openPopupboxFleapit}>
          <h3>
            <b>Fleapit:</b> non-monetary exchange platform
          </h3>
          <img
            className="portfolio-image"
            src={fleapit}
            alt="Fleapit: non-monetary exchange platform"
          />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
      </div>
      {/* </div> */}
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
