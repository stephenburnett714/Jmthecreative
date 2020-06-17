import React from "react";
import Navbar from "./Navbar";
import gymmly from "../Images/gymmly.png";
import unirever from "../Images/unirever.png";
import optimal from '../Images/optimal.png'
import piton from '../Images/piton.png'
import { useEffect } from "react";

const Work = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className="px-32 py-10">
      <div className="text-6xl">Case Studies</div>
      <div>
        Examples of recent projects that I've worked on for startups where I've
        made ideas tangible.
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row shadow-lg p-2 rounded-lg m-4">
          <div>
            <div className="text-4xl">Gymmly</div>
            <div>
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div>Read case</div>
          </div>
          <div>
            <img className="w-auto" src={gymmly} alt="" />
          </div>
        </div>
        

        <div className="flex flex-row shadow-lg p-2 rounded-lg m-4">
          <div>
            <div className="text-4xl">Unirever</div>
            <div>
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div>Read case</div>
          </div>
          <div>
            <img src={unirever} alt="" />
          </div>
        </div>
        

        <div className=" grid grid-cols-2 shadow-lg p-2 rounded-lg m-4">
          <div>
            <div className="text-4xl">Piton App</div>
            <div>
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div>Read case</div>
          </div>
          <div>
            <img src={piton} alt="" />
          </div>
        </div>


       <div className="flex flex-row shadow-lg p-2 rounded-lg m-4">
          <div>
            <div className="text-4xl">Optimal Price</div>
            <div>
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div>Read case</div>
          </div>
          <div>
            <img src={optimal} alt="" />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
