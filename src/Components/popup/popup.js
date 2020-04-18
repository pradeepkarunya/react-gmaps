import React from "react";
import aboutImg from "../../images/Prad_Capture.PNG";

const popupContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `;

const popup = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={aboutImg} className="popup__img" alt="about me" />
          <img src={aboutImg} className="popup__img" alt="about me" />
        </div>
        <div className="popup__right">
          <div className="popup__title_avatar">
            <div className="popup__headingtitle">
              <h2 className="heading_secondary">Pradeep Kumar Sundaramurthy</h2>
              <span className="popup__span_title">Front End Developer, Team Lead - HCL Technologies</span>
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
            <button className="btn btn-labeled btn-success">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popup;
