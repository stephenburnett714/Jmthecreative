import React from "react";
import { Card } from "react-bootstrap";
import HomePicture from "../Images/HomePicture.png";
import Card1 from "../Images/Card1.png"


const Work = () => {
  return (
    <div>
      <div>Work</div>
      <div className="title-font-black">Case Studies</div>
      <div>
        <div>
          These are my thoughts behind the process of designing some recent
          projects that I’ve worked on for startups. Scrum style explanation of
          projects.
        </div>
      </div>

      <Card className="h-100 shadow-sm bg-white rounded">
        <div>Connecting mind, body and community.</div>
        <div>
          Connect through a group messenger app to grow a fitness community
          anytime you need support
        </div>
        


        <div>Read case</div>
        <Card.Img variant="top" src="../Images/Card1.png"/>
      </Card>

      <div>
        <div>
          <div>Optimal Price — </div>
          <div>Guerrilla User Research</div>
          <div>Read case</div>
          <img src="" alt="" />
        </div>

        <div>
          <div>UniRever — </div>
          <div>E-Commerce Dash UI</div>
          <div>Read case</div>
          <img src="" alt="" />
        </div>

        <div>
          <div>Piton — </div>
          <div>Voice UI Prototype</div>
          <div>Read case</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
