import React from "react";
import HomePicture from '../Images/HomePicture.png'
import Avaliability from '../Images/Availability.png'

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="title-font">Product Designer</div>
      <div className="text-font">
        I help startup founders to design well thought out digital products that
        focus on delivering a quality user experience.
      </div>
      <button className="home-contact-button">Contact</button>
      <div className="home-main-img-container">
          <img className="about-img" src={Avaliability} alt=""/>
      </div>
      <div>
      <img src={HomePicture} alt=""/>
      </div>
    </div>
  );
};

export default Home;
