import react from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaFacebook } from "react-icons/fa";
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
        <h4 className="About-work-title title-block">Work</h4>
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
      <div className="About-bio">
        <h4 className="title-block">Bio</h4>
        <div className="About-bio-content">
          <ul className="bio-content-list">
            <li>
              <span>2002</span>
              <span>Born in Quang Ngai, Vietnam.</span>
            </li>
            <li>
              <span>2021</span>
              <span className="bio-especial">Studying at university.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="About-ilove">
        <div className="title-block">
          I <span>♥</span>
        </div>
        <div className="About-ilove-content">
          Art, Music, k-drama,
          <span className="hightlight"> Anime, </span>
          Peaceful places, Park.
        </div>
      </div>
      <div className="About-ontheweb">
        <div className="title-block">On the web</div>
        <span className="ontheweb-item">
          <FaGithub className="icon" />
          <span>
            <a href="https://github.com/ThangSuperMan">ThangSuperMan</a>
          </span>
        </span>
        <span className="ontheweb-item">
          <FaFacebook className="icon" />
          <span>
            <a href="https://www.facebook.com/profile.php?id=100025635353631">
              Tann Thangg
            </a>
          </span>
        </span>
      </div>

      <button href="#" className="primary-button">
        Popular post
        <MdKeyboardArrowRight className="icon" />
      </button>
    </div>
  );
};

export default About;
