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
      <div className="pt-24 pb-5 px-10 lg:pt-32 lg:px-32 lg:pb-10">
      <div className="text-6xl">Case Studies</div>
      <div>
        Examples of recent projects that I've worked on for startups where I've
        made ideas tangible.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 shadow-lg p-4 rounded-lg m-4">
          <div className="self-center">
            <div className="text-4xl pb-2">Gymmly</div>
            <div className="pb-2">
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div className="text-blue-500">Read case</div>
          </div>
          <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
            <div><img className="w-auto" src={gymmly} alt="" /></div>
          </div>
        </div>
        

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 shadow-lg p-4 rounded-lg m-4">
          <div className="self-center">
            <div className="text-4xl pb-2">Unirever</div>
            <div className="pb-2">
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div className="text-blue-500">Read case</div>
          </div>
          <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
            <div><img className="overflow-visible" src={unirever} alt="" /></div>
          </div>
        </div>
        

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 shadow-lg p-4 rounded-lg m-4">
          <div className="self-center">
            <div className="text-4xl pb-2">Piton App</div>
            <div className="pb-2">
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div className="text-blue-500">Read case</div>
          </div>
          <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
            <div><img src={piton} alt="" /></div>
          </div>
        </div>


       <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 shadow-lg p-4 rounded-lg m-4">
          <div className="self-center">
            <div className="text-4xl pb-2">Optimal Price</div>
            <div className="pb-2">
              Connect through a group messenger app to grow a fitness community
              anytime you need support
            </div>
            <div className="text-blue-500">Read case</div>
          </div>
          <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
            <div><img src={optimal} alt="" /></div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Work;
