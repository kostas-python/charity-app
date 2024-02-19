import React from 'react';
import { Link } from 'react-router-dom';
/* import "./styles/home.css"; */

function Navbar () {
    return (

          <header
            className="u-clearfix u-header u-palette-3-light-1"
            id="sec-abaa"
            data-animation-name=""
            data-animation-duration={0}
            data-animation-delay={0}
            data-animation-direction=""
          >
            <div className="u-clearfix u-sheet u-sheet-1">
              <img
                className="u-image u-image-contain u-image-round u-preserve-proportions u-radius u-image-1"
                src="images/e7146c1d90a5cc006eae6db0f6e1f9f4285b1d16a00c72982d150b9520e125d715366f2afd1c9353df36d92a586093cf7a8be867c134b9939b3412_1280.png"
                alt=""
                data-image-width={1280}
                data-image-height={1280}
              />
              <h4 className="u-text u-text-custom-color-2 u-text-1">
                &nbsp; &nbsp;Healing ​Horizons&nbsp;Psychotherapy
                <br />
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <span styles={{ fontSize: "1.125rem" }}>
                  "Discover your Inner Strength"
                </span>
              </h4>
              <nav
                className="u-menu u-menu-one-level u-offcanvas u-menu-1"
                data-responsive-from="MD"
              />
              
                <div
                  className="menu-collapse"
                  styles={{ fontSize: "1rem", letterSpacing: 0, fontWeight: 700 }}
                >
                  <a
                    className="u-button-style u-custom-active-border-color u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                    href="#"
                  >
                    <svg className="u-svg-link" viewBox="0 0 24 24">
                      <use
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xlinkHref="#menu-hamburger"
                      />
                    </svg>
                    <svg
                      className="u-svg-content"
                      version="1.1"
                      id="menu-hamburger"
                      viewBox="0 0 16 16"
                      x="0px"
                      y="0px"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <rect y={1} width={16} height={2} />
                        <rect y={7} width={16} height={2} />
                        <rect y={13} width={16} height={2} />
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="u-custom-menu u-nav-container" wfd-invisible="true">
                  <ul className="u-nav u-spacing-0 u-unstyled u-nav-1">
                    <li className="u-nav-item">
                      <a
                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base"
                        to="src/pages/home.js"
                        styles={{ padding: "0px 20px" }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base"
                        to="src/pages/AboutUs.js"
                        styles={{ padding: "0px 20px" }}
                      >
                        About Us
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base"
                        to="src/pages/ContactUs.js"
                        styles={{ padding: "0px 20px" }}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li className="u-nav-item">
                      <a
                        className="u-border-2 u-border-active-grey-30 u-border-grey-30 u-border-hover-grey-30 u-border-no-bottom u-border-no-left u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-light-1 u-text-palette-1-base"
                        to="src/pages/Donate.js"
                        styles={{ padding: "0px 20px" }}
                      >
                        Donate
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse"/>
                  <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                    <div className="u-inner-container-layout u-sidenav-overflow">
                      <div className="u-menu-close" />
                      <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link" to="src/pages/Home">
                            Home
                          </a>
                        </li>
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link" to="src/pages/AboutUs.js">
                            About Us
                          </a>
                        </li>
                        <li className="u-nav-item">
                          <a
                            className="u-button-style u-nav-link"
                            to="src/pages/ContactUs.js"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li className="u-nav-item">
                          <a className="u-button-style u-nav-link" to="src/pages/Donate.js">
                            Donate
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="u-black u-menu-overlay u-opacity u-opacity-70"
                    wfd-invisible="true"
                  />
                  </div>
                
          
          </header>
          
    );

    }


export default Navbar; 