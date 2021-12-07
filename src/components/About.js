import { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaFacebook } from "react-icons/fa";
import "./About.css";
import imageAvatar from "../public/images/avatar.jpeg";
import { gsap, TimelineMax } from "gsap";
import { NavLink } from "react-router-dom";

const About = () => {
  const aboutSayHiRef = useRef();
  const aboutWorkRef = useRef();
  const aboutBioRef = useRef();
  const aboutILoveRef = useRef();
  const aboutOnTheWebRef = useRef();
  const aboutMeRef = useRef();
  const [tl] = useState(new TimelineMax());

  // Functions
  const goToPageWorks = (event) => {
    window.location.href = "http://localhost:3000/works";
  };

  const goToPagePosts = (event) => {
    window.location.href = "http://localhost:3000/posts";
  };

  // Wait until DOM has been rendered
  useEffect(() => {
    tl.from([aboutSayHiRef.current, aboutMeRef.current], {
      y: "20px",
      duration: 0.75,
      alpha: 0,
      ease: "Power2.easeInOut",
    });

    tl.from(
      [
        aboutWorkRef.current,
        aboutBioRef.current,
        aboutILoveRef.current,
        aboutOnTheWebRef.current,
      ],
      {
        y: "20px",
        duration: 0.75,
        alpha: 0,
        ease: "Power2.easeInOut",
      }
    );
  }, []);

  return (
    <div className="About">
      <div className="About-sayhi" ref={aboutSayHiRef}>
        Hello, I'm a full-stack developer based in Vietnam!
      </div>
      <div className="About-me" ref={aboutMeRef}>
        <div className="About-me-right">
          <h2>Phan Tan Thang</h2>
          <p>Digital Craftsman ( Creative / Developer / Designer )</p>
        </div>
        <div className="About-me-left">
          <img src={imageAvatar} />
        </div>
      </div>
      <div className="About-work" ref={aboutWorkRef}>
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
        <button
          onClick={goToPageWorks}
          type="button"
          className="primary-button"
        >
          My portfolio <MdKeyboardArrowRight className="icon" />
        </button>
      </div>
      <div className="About-bio" ref={aboutBioRef}>
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
      <div className="About-ilove" ref={aboutILoveRef}>
        <div className="title-block">
          I <span>♥</span>
        </div>
        <div className="About-ilove-content">
          Art, Music, k-drama,
          <span className="hightlight"> Anime, </span>
          Peaceful places, Park.
        </div>
      </div>
      <div className="About-ontheweb" ref={aboutOnTheWebRef}>
        <div className="title-block">On the web</div>
        <div className="ontheweb-wrapper">
          <button type="button" className="ontheweb-item">
            <FaGithub className="icon ontheweb-icon" />
            <a href="https://github.com/ThangSuperMan">@ThangSuperMan</a>
          </button>
          <button type="button" className="ontheweb-item">
            <FaFacebook className="icon ontheweb-icon" />
            <a href="https://www.facebook.com/profile.php?id=100025635353631">
              @Tann Thangg
            </a>
          </button>
        </div>
      </div>

      <button onClick={goToPagePosts} type="button" className="primary-button">
        Popular post
        <MdKeyboardArrowRight className="icon" />
      </button>
    </div>
  );
};

export default About;
