import React from "react";
import aboutImg from "../../images/Prad_Capture.PNG";
import babelImg from "../../images/logos/Babel.png";
import css3Img from "../../images/logos/css3.png";
import html5Img from "../../images/logos/html5.png";
import es6Img from "../../images/logos/js.png";
import nodeImg from "../../images/logos/nodejs.png";
import reactImg from "../../images/logos/Reactjs.png";
import reactRouterImg from "../../images/logos/react-router.png";
import reduxImg from "../../images/logos/Redux.png";
import githubImg from "../../images/logos/social/github_logo2.png";
import linkedinImg from "../../images/logos/social/linkedin_logo.png";
import gmailImg from "../../images/logos/social/gmail_logo.png";

import babelLogo from "../../images/logos/techicons/babel-logo.png";
import html5Logo from "../../images/logos/techicons/html5-icon.png";
import css3Logo from "../../images/logos/techicons/css3-icon.png";
import jsLogo from "../../images/logos/techicons/javascript-icon.png";
import jqueryLogo from "../../images/logos/techicons/jquery-logo.png";
import reactLogo from "../../images/logos/techicons/reactjs-logo.png";
import reduxLogo from "../../images/logos/techicons/redux-logo.png";
import reactrouterLogo from "../../images/logos/techicons/react-router-logo.png";
import svgLogo from "../../images/logos/techicons/svg-logo.png";
import backboneLogo from "../../images/logos/techicons/backbone-logo.png";
import githubLogo from "../../images/logos/techicons/Github-icon.png";
import sassLogo from "../../images/logos/techicons/sass-logo.png";
import lessLogo from "../../images/logos/techicons/less-logo.png";
import nodejs from "../../images/logos/techicons/nodejs-logo.png";
import npmjs from "../../images/logos/techicons/npm-logo.png";

const popupContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `;

const popup = (props) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <div className="popup__flexHeading">
            <h3>Built With </h3>
          </div>
          <div className="popup__flexdiv">
            <div>
              <img
                className="popup__flexdiv_ImgRow"
                alt="babel"
                src={babelImg}
                title="Babel"
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="css3"
                title="CSS 3"
                src={css3Img}
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="html5"
                title="HTML 5"
                src={html5Img}
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="es6"
                title="ECMA 6"
                src={es6Img}
              ></img>
            </div>

            <div>
              <img
                className="popup__flexdiv_ImgRow"
                alt="node"
                title="Node JS"
                src={nodeImg}
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="react"
                title="React"
                src={reactImg}
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="react router"
                title="React Router"
                src={reactRouterImg}
              ></img>
              <img
                className="popup__flexdiv_ImgRow"
                alt="redux"
                title="Redux"
                src={reduxImg}
              ></img>
            </div>
          </div>
          <div className="popup__tech_img">  
            <div className="popup__tech_img__flexH3">
              <h3>Technical Expertise</h3>
            </div>
            <div className="popup__flexdiv1">
              <img
                src={babelLogo}
                alt="Babel"
                title="BABEL"
                className="popup__techicons"
              />
              <img
                src={html5Logo}
                alt="html5"
                title="HTML5"
                className="popup__techicons"
              />
              <img
                src={css3Logo}
                alt="css3"
                title="CSS3"
                className="popup__techicons"
              />
              <img
                src={jsLogo}
                alt="js"
                title="JAVASCRIPT"
                className="popup__techicons"
              />
              <img
                src={jqueryLogo}
                alt="nodejs"
                title="JQUERY"
                className="popup__techicons"
              />
              <img
                src={nodejs}
                alt="nodejs"
                title="NODE JS"
                className="popup__techicons"
              />
              <img
                src={npmjs}
                alt="npm"
                title="NPM"
                className="popup__techicons"
              />
              <img
                src={reactLogo}
                alt="reactjs"
                title="REACT JS"
                className="popup__techicons"
              />
              <img
                src={reactrouterLogo}
                alt="reactrouter"
                title="REACT ROUTER"
                className="popup__techicons"
              />
              <img
                src={reduxLogo}
                alt="redux"
                title="REDUX"
                className="popup__techicons"
              />
              <img
                src={backboneLogo}
                alt="backbone"
                title="BACKBONE JS"
                className="popup__techicons"
              />
              <img
                src={sassLogo}
                alt="sass"
                title="SASS"
                className="popup__techicons"
              />
              <img
                src={lessLogo}
                alt="less"
                title="LESS"
                className="popup__techicons"
              />
              <img
                src={svgLogo}
                alt="svg"
                title="SVG"
                className="popup__techicons"
              />
              <img
                src={githubLogo}
                alt="github"
                title="GITHUB"
                className="popup__techicons"
              />
            </div>

            <div className="popup__socialflexdiv">
              <img
                src={githubImg}
                alt="github"
                title="Reach Me - Github"
                className="popup__socialicons popup__socialicons__splicon"
                onClick={() =>
                  window.open("https://github.com/pradeepkarunya", "_blank")
                }
              />
              <img
                src={linkedinImg}
                alt="linkedin"
                title="Reach Me - Linkedin"
                className="popup__socialicons"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/pradeepkumarvnb/",
                    "_blank"
                  )
                }
              />
              <img
                src={gmailImg}
                alt="email"
                title="Reach Me - GMAIL"
                className="popup__socialicons popup__socialicons__splicon"
                onClick={() =>
                  (window.location.href = "mailto:pradeepkarunya@gmail.com")
                }
              />
            </div>
          </div>
        </div>
        <div className="popup__right">
          <div className="popup__title_avatar">
            <div className="popup__headingtitle">
              <h2 className="heading_secondary">Pradeep Kumar Sundaramurthy</h2>
              <span className="popup__span_title">
                Front End Developer with Adequate UI Experience
              </span>
            </div>
            <div className="popup__avatar_img">
              <img
                className="popup__avatarLogo"
                src={aboutImg}
                alt="avatar logo"
              />
            </div>
          </div>
          <h5 className="heading_tertiary">Profile</h5>
          <p className="popup__text">{popupContent}</p>
          <div className="popup__profileview">
            <button
              className="btn btn-labeled btn-success"
              onClick={props.passref}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popup;
