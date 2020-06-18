import React from "react";
import Navbar from "./Navbar";
import RD from "../Images/R&D.png";
import Ideation from "../Images/Ideation.png";
import Hifi from "../Images/Hifi.png";
import Development from "../Images/Development.png";
import Measure from "../Images/Measure.png";
import RDLarge from "../Images/R&DLarge.png";
import IdeationLarge from "../Images/IdeationLarge.png";
import HifiLarge from "../Images/HifiLarge.png";
import DevelopmentLarge from "../Images/DevelopmentLarge.png";
import MeasureLarge from "../Images/MeasureLarge.png";
import { Link } from "react-scroll";
import { useEffect } from "react";

const Process = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      });

  return (
    <div>
      <Navbar />
      <div className="pt-24 pb-5 px-10 lg:pt-32 lg:px-32 lg:pb-10">
        <div className="text-5xl lg:text-6xl">Process</div>
        <div className="lg:w-1/2 text-xl">
          There is no set linear process that is used when working with clients
          and stakeholders, but these phases are common in every design process.
        </div>
        {/* ____________ */}
        {/*  Button Bar  */}
        {/* ____________ */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between my-16">
          {/* Research/Discovery */}
          <Link
            activeClass="active"
            to="Research/Discovery"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className=" cursor-pointer flex flex-col px-4 py-10 shadow w-40 h-auto rounded-lg mb-4 lg:mb-0">
              <div className="pb-3 self-center">
                <img className="process-image-styles" src={RD} alt="" />
              </div>
              <div className="text-center">Research/ Discovery</div>
            </div>
          </Link>

          {/* Ideation */}
          <Link
            activeClass="active"
            to="Ideation"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="cursor-pointer flex flex-col px-4 py-10 shadow w-40 h-auto rounded-lg mb-4 lg:mb-0">
              <div className="pb-3 self-center">
                <img className="process-image-styles" src={Ideation} alt="" />
              </div>
              <div className="text-center">Ideation/ Brainstorming</div>
            </div>
          </Link>

          {/* Hifi */}
          <Link
            activeClass="active"
            to="Hifi"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="cursor-pointer flex flex-col px-4 py-10 shadow w-40 h-auto rounded-lg mb-4 lg:mb-0">
              <div className="pb-3 self-center">
                <img className="process-image-styles" src={Hifi} alt="" />
              </div>
              <div className="text-center">Hi-Fi Design/ Prototyping</div>
            </div>
          </Link>

          {/* Development */}
          <Link
            activeClass="active"
            to="Development"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="cursor-pointer flex flex-col px-4 py-10 shadow w-40 h-auto rounded-lg mb-4 lg:mb-0">
              <div className="pb-3 self-center">
                <img className="process-image-styles" src={Development} alt="" />
              </div>
              <div className="text-center">Development/ Handoff</div>
            </div>
          </Link>

          {/* Measure */}
          <Link
            activeClass="active"
            to="Measure"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div className="cursor-pointer flex flex-col px-4 py-10 shadow w-40 h-auto rounded-lg mb-4 lg:mb-0">
              <div className="pb-3 self-center">
                <img className="process-image-styles" src={Measure} alt="" />
              </div>
              <div className="text-center">Measure/ Iteration</div>
            </div>
          </Link>
        </div>

        {/* ____________ */}
        {/*  Page Data   */}
        {/* ____________ */}
        <div>
          {/* R & D */}
          <div id="Research/Discovery" className="lg:grid lg:grid-cols-2 py-16">
            <div className="flex flex-col justify-center lg:flex-none lg:pr-20">
              <div className="text-4xl pb-4">Research/ Discovery</div>
              <div>
                This phase kicks off the project by listening to understand and
                discover the full context of the product design vision that
                stakeholders have from a user perspective and clearly define the
                problem.
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div><img src={RDLarge} alt="" /></div>
            </div>
          </div>

          {/* Ideation */}

          <div id="Ideation" className="lg:grid lg:grid-cols-2 py-16">
            <div className="flex flex-col justify-center lg:flex-none lg:pr-20">
              <div className="text-4xl pb-4">Ideation/ Brainstorming</div>
              <div>
                Jonathan will create a customized workshop that uses divergent
                thinking to generate as many possible ideas and solutions
                imaginable. At this point we will decide on a potential solution
                to the problem.
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div><img src={IdeationLarge} alt="" /></div>
            </div>
          </div>

          {/* HIFI */}

          <div id="Hifi" className="lg:grid lg:grid-cols-2 py-16">
            <div className="flex flex-col justify-center lg:flex-none lg:pr-20">
              <div className="text-4xl pb-4">Hi-Fi Design/ Prototyping</div>
              <div >
                This is the phase where Jonathan gets hands on with designing
                high fidelity visuals for your product. High fidelity visuals
                may be delivered in the form of pixel perfect screen designs,
                style guides, logo designs, device mockups and rapid click
                through prototypes.
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div><img src={HifiLarge} alt="" /></div>
            </div>
          </div>

          {/* Development */}

          <div id="Development" className="lg:grid lg:grid-cols-2 py-16">
            <div className="flex flex-col justify-center lg:flex-none lg:pr-20">
              <div className="text-4xl pb-4">Development/ Handoff</div>
              <div>
                Jonathan will make sure that your product design is ready for
                development and will collaborate with developers on any iOS,
                Android, or Web based applications.
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div><img src={DevelopmentLarge} alt="" /></div>
            </div>
          </div>

          {/* Measure */}

          <div id="Measure" className="lg:grid lg:grid-cols-2 py-16">
            <div className="flex flex-col justify-center lg:flex-none lg:pr-20">
              <div className="text-4xl pb-4">Measurement/ Iteration</div>
              <div>
                We’ll conduct both user tests and usability studies with real
                users. Based on critical feedback we’ll iterate on the design
                and make necessary improvements to ensure the highest quality
                experience for the end-user.
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pt-4 lg:pt-0">
              <div><img src={MeasureLarge} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
