import React from "react";
import jmcircle from "../Images/jmcircle.png";
import jmlogo from "../Images/jmlogo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-16 flex flex-col">
      <div className="grid grid-cols-7">
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="col-span-5 lg:col-span-3">
          <div className="grid-span-5 flex flex-col text-center">
            <div className="text-4xl lg:text-5xl pb-4">Wanna collab on an idea?</div>
            <div className="pb-4">
              I enjoy working with startup founders & entreprenuers to
              brainstorm and make better decisions quickly about product design
              and user experiences.
            </div>
            <div className="flex justify-center content-center">
              <button className="mb-4 call-color p-2 rounded">Book a call</button>
            </div>
          </div>
          <div className="pb-4 flex flex-row justify-center content-center">
            <div>
              <img src={jmcircle} alt="" />
            </div>
            <div className="self-center">
              working: check calendar for availability
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex justify-center content-center">
              <img className="pb-4" src={jmlogo} alt="" />
            </div>
            <div>Product Designer & Independent Consultant</div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2"></div>
      </div>
    </div>
  );
};

export default Footer;
