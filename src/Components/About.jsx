import React from "react";
import Navbar from './Navbar'
import jmpen from "../Images/JmRectangle.png";
import jmdrawing from '../Images/JmDrawing.png'
import { useEffect } from "react";



const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      {/* _______________ */}
      {/* JM The Creative */}
      {/* _______________ */}
      <div className="py-24 lg:grid lg:grid-cols-2 lg:py-32">
        <div className="flex content-center flex-col justify-center px-16 lg:px-24 py-0">
          <div className="text-4xl pb-4">JM The Creative</div>
          <div className="pb-5 lg:pb-0">
            Jonathan is a Product Designer & Independent Consultant that is
            passionate about startups and making ideas tangible. Currently based
            in Orlando, FL. He is originally from NYC. Jonathan enjoys working
            with clients and teams that operate remote-first. He is Interested
            in new projects based in NYC, and looking to relocate.
            <br />
            <br />
            With 5+ years of experience in helping founders to communicate their
            vision for digital products. Jonathan leverages user-centered design
            approaches that focus on improving the user journey through a
            web/mobile app experience with the intention of increasing the
            quality of the user interaction.
            <br />
            <br />
            Jonathan is offering Product Design skills in the form of virtual
            workshops, collaborative visual design and prototyping to software &
            consulting companies that want to scale their design capacity.
          </div>
        </div>
        <div className="px-16 lg:px-0">
          <img src={jmpen} alt="" />
        </div>
      </div>
      {/* _______________ */}
      {/*   Personality   */}
      {/* _______________ */}
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex content-center flex-col justify-center px-24 py-0">
          <div className="text-4xl pb-4">Personality</div>
          <div>A few things about Jonathan:</div>
          <div className="pb-5 lg:pb-0">
              <li>Loves Reggaeton (urban latin music genre)</li>
              <li>Future Trunks is his favorite Dragonball Z character</li>
              <li>He's a hopeless romantic</li>
              <li>A poet</li>
              <li>An artist that draws and illustrates in his downtime</li>
          </div>
        </div>
        <div>
          <img src={jmdrawing} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
