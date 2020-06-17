import React from "react";
import jmcircle from "../Images/jmcircle.png";
import jmwink from "../Images/jmwink.png";
import jmstars from "../Images/jmstars.png";
import jmexplosion from "../Images/jmexplosion.png";
import jmthumb from "../Images/jmthumb.png";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {

useEffect(() => {
  window.scrollTo(0, 0);
});

  return (
    <div>
      <Navbar />
      <div id="home">
        {/* ________________ */}
        {/* Your “go-to” guy */}
        {/* ________________ */}
        <div className="flex flex-col lg:flex-row bg-black text-white pt-24 pb-10 px-12 lg:py-32 lg:px-32">
          <div className="md:w-3/5">
            <div className="text-4xl pb-4 lg:text-6xl">Your “go-to” guy for UX Design</div>
            <div className="text-xl lg:text-2xl pb-4">
              Helping startup founders to design thoughtful digital products
              that ensure a high quality user experience.
            </div>
            <div>
              <button className="call-color p-2 rounded-md lg:mr-32 text-white">
                Book a call
              </button>
            </div>
            <div className="pt-4 flex flex-row align-items-center">
              <div className="pr-3">
                <img src={jmcircle} alt="" />
              </div>
              <div>working: check calendar for availability</div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={jmwink} alt="" />
          </div>
        </div>
        {/* ___________________ */}
        {/* Personal Consultant */}
        {/* ___________________ */}
        <div className="bg-white text-black px-12 lg:px-32 pt-16">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div className="text-4xl pb-4">Your personal consultant</div>
              <div className="text-xl">
                1-on-1 engagements with a professional designer that will help
                you to solve critical problems for you in your business and map
                out an entire experience for your product launch.
              </div>
            </div>
            <div>
              <img src={jmstars} alt="" />
            </div>
          </div>
        </div>
        {/* _____________ */}
        {/* User-Centered */}
        {/* _____________ */}
        <div className="grid md:grid-cols-2">
          <div className="py-32">
            <div className="text-4xl">Keeping things user-centered</div>
            <div className="text-xl">
              Great User Experience is a product of really good design, it is
              something that is functional and emotionally satisfying.
            </div>
          </div>
          <div className="py-32">
            <div className="text-xl">
              Benefit from building user base of brand advocates
            </div>
            <div className="text-xl">
              Make the best possible decisions by testing prototypes with REAL
              users!
            </div>
            <div className="text-xl">
              Save tons of money on engineering by having developers build on a
              well thought out design
            </div>
            <div className="text-xl">
              Maximize valuable engineering time and avoid re-working ideas that
              can be validated sooner
            </div>
          </div>
        </div>
        {/* ________________ */}
        {/* Tangible Results */}
        {/* ________________ */}
        <div className="grid md:grid-cols-2">
          <div className="py-32">
            <div className="text-4xl">Turning ideas into tangible results</div>
            <div className="text-xl">
              From napkin sketch to digital prototype and everything in between.
              An iterative design process that ensures high quality UX as an
              explicit outcome.
            </div>
            <NavLink exact activeClass="active" to="/process">
              <div className="text-blue-500">View UX Process</div>
            </NavLink>
          </div>
          <div className="py-32">
            <img src={jmexplosion} alt="" />
          </div>
        </div>

        {/* ________________ */}
        {/* JM The Creative  */}
        {/* ________________ */}
        <div className="grid md:grid-cols-2">
          <div className="py-32">
            <div className="text-4xl">JM The Creative</div>
            <div className="text-xl">
              With 5+ years of experience in helping founders to communicate
              their vision for digital products. Jonathan leverages
              user-centered design approaches that focus on improving the user
              journey through a web/mobile app experience with the intention of
              increasing the quality of the user interaction.
            </div>
            <NavLink exact activeClass="active" to="./about">
              <div className="text-blue-500">More About JM</div>
            </NavLink>
          </div>
          <div className="py-32">
            <img src={jmthumb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
