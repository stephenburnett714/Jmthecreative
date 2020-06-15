import React from "react";
import jmpen from "../Images/JmRectangle.png"

const About = () => {
  return (
    <div>
      <div>
        <div>JM The Creative</div>
        <div>
          Jonathan is a Product Designer & Independent Consultant that is
          passionate about startups and making ideas tangible. Currently based
          in Orlando, FL. He is originally from NYC. Jonathan enjoys working
          with clients and teams that operate remote-first. He is Interested in
          new projects based in NYC, and looking to relocate. 
          <br/>
          <br/>
          With 5+ years of
          experience in helping founders to communicate their vision for digital
          products. Jonathan leverages user-centered design approaches that
          focus on improving the user journey through a web/mobile app
          experience with the intention of increasing the quality of the user
          interaction. 
          <br/>
          <br/>
          Jonathan is offering Product Design skills in the form of
          virtual workshops, collaborative visual design and prototyping to
          software & consulting companies that want to scale their design
          capacity.
        </div>
        <div><img src={jmpen} alt=""/></div>
      </div>
    </div>
  );
};

export default About;
