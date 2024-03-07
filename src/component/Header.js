import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/e7146c1d90a5cc006eae6db0f6e1f9f4285b1d16a00c72982d150b9520e125d715366f2afd1c9353df36d92a586093cf7a8be867c134b9939b3412_1280.png';
import '../styles/Home.css';
import '../styles/nicepage.css';



function Header() {
  return (
    <header className="u-clearfix u-header u-palette-3-light-1" id="sec-abaa">
      <div className="u-clearfix u-sheet u-sheet-1">
        <img className="u-image u-image-contain u-image-round u-preserve-proportions u-radius u-image-1" src={image1} alt="" />
        <h4 className="u-text u-text-custom-color-2 u-text-1">
          &nbsp; &nbsp;Healing ​Horizons&nbsp;Psychotherapy
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span style={{ fontSize: "1.125rem" }}>
            "Discover your Inner Strength"
          </span>
        </h4>
        <nav className="u-menu u-menu-one-level u-offcanvas u-menu-1" data-responsive-from="MD">
          
          <div className="u-custom-menu u-nav-container" style={{ display: "none" }}>
            <ul className="u-nav u-spacing-0 u-unstyled u-nav-1">
              <li className="u-nav-item">
                <Link className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base"  to="/Home" style={{ padding: "0px 20px" }}>
                  Home
                </Link>
              </li>
              <li className="u-nav-item">
                <Link className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base" to="/AboutUs" style={{ padding: "0px 20px" }}>
                  About Us
                </Link>
              </li>
              <li className="u-nav-item">
                <Link className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base" to="/ContactUs" style={{ padding: "0px 20px" }}>
                  Contact Us
                </Link>
              </li>
              <li className="u-nav-item">
                <Link className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base" to="/Donate" style={{ padding: "0px 20px" }}>
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
