import React from "react";
import jmcircle from "../Images/jmcircle.png";
import jmwink from "../Images/jmwink.png";
import jmstars from "../Images/jmstars.png";
import jmexplosion from "../Images/jmexplosion.png";
import jmthumb from "../Images/jmthumb.png";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        {/* ________________ */}
        {/* Your “go-to” guy */}
        {/* ________________ */}
        <div className="flex flex-row bg-black text-white p-32">
          <div>
            <div className="text-6xl">Your “go-to” guy for UX Design</div>
            <div className="text-2xl">
              Helping startup founders to design thoughtful digital products
              that ensure a high quality user experience.
            </div>
            <div>
              <button className="bg-blue-400 p-2 rounded-md mr-32 text-white">
                Book a call
              </button>
            </div>
            <div className="flex flex-row align-items-center">
              <div>
                <img src={jmcircle} alt="" />
              </div>
              <div>working: check calendar for availability</div>
            </div>
          </div>
          <div>
            <img src={jmwink} alt="" />
          </div>
        </div>
        {/* ___________________ */}
        {/* personal consultant */}
        {/* ___________________ */}
        <div className="bg-white text-black">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center">
              <div className="text-4xl">Your personal consultant</div>
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
        {/* User-centered */}
        {/* _____________ */}
        <div className="grid md:grid-cols-2">
          <div className="p-32">
            <div className="text-4xl">Keeping things user-centered</div>
            <div className="text-xl">
              Great User Experience is a product of really good design, it is
              something that is functional and emotionally satisfying.
            </div>
          </div>
          <div className="p-32">
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
          <div className="p-32">
            <div className="text-4xl">Turning ideas into tangible results</div>
            <div className="text-xl">
              From napkin sketch to digital prototype and everything in between.
              An iterative design process that ensures high quality UX as an
              explicit outcome.
            </div>
            <NavLink exact to="/process">
              <div className="text-blue-500">View UX Process</div>
            </NavLink>
          </div>
          <div className="p-32">
            <img src={jmexplosion} alt="" />
          </div>
        </div>

        {/* ________________ */}
        {/* JM The Creative  */}
        {/* ________________ */}
        <div className="grid md:grid-cols-2">
          <div className="p-32">
            <div className="text-4xl">JM The Creative</div>
            <div className="text-xl">
              With 5+ years of experience in helping founders to communicate
              their vision for digital products. Jonathan leverages
              user-centered design approaches that focus on improving the user
              journey through a web/mobile app experience with the intention of
              increasing the quality of the user interaction.
            </div>
            <NavLink exact to="./about">
              <div className="text-blue-500">More About JM</div>
            </NavLink>
          </div>
          <div className="p-32">
            <img src={jmthumb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
