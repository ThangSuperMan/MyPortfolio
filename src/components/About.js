import react from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./About.css";
import imageAvatar from "../public/images/avatar.jpeg";

const About = () => {
  return (
    <div className="About">
      <div className="About-sayhi">
        Hello, I'm a full-stack developer based in Vietnam!
      </div>
      <div className="About-me">
        <div className="About-me-right">
          <h2>Phan Tan Thang</h2>
          <p>Digital Craftsman ( Creative / Developer / Designer )</p>
        </div>
        <div className="About-me-left">
          <img src={imageAvatar} />
        </div>
      </div>
      <div className="About-work">
        <h4 className="About-work-title">Work</h4>
        <div className="About-work-content">
          Thang is a student and he want to become a full-stack developer based
          in Vietnam with passion for building digital services/stuff he wants.
          He has a strong motivation for building the creative website, from
          planing and designning all the want to solving real-life problems with
          code. When he not online, he loves hanging out alone. Currently, he is
          working on the product call
          <span className="hightlight"> portfolio.</span>
        </div>
        <button type="button" className="primary-button">
          My portfolio <MdKeyboardArrowRight className="icon" />
        </button>
      </div>
    </div>
  );
};

export default About;
