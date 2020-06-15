import React from "react";
import jmcircle from "../Images/jmcircle.png";
import jmlogo from "../Images/jmlogo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white px-64 py-16 flex flex-col">
      <div className="flex flex-col px-32">
        <div className="flex flex-col text-center">
          <div className="text-5xl">Wanna collab on an idea?</div>
          <div>
            I enjoy working with startup founders & entreprenuers to brainstorm
            and make better decisions quickly about product design and user
            experiences.
          </div>
          <div className="flex justify-center content-center"><button className="bg-blue-400 p-2 rounded">Book a call</button></div>
        </div>
        <div className="flex flex-row justify-center content-center">
          <div><img src={jmcircle} alt="" /></div>
          <div className="self-center">working: check calendar for availability</div>
        </div>
        <div className="flex flex-col text-center">
 <div className="flex justify-center content-center"><img src={jmlogo} alt="" /></div>
          <div>Product Designer & Independent Consultant</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
