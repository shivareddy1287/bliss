import { useState, useEffect } from "react";
import blssLogo from "../../assets/blsslogo.png";
import { Link } from "react-router-dom";
// angle-right

function TopHeader() {
  const activePage = window.location.pathname;

  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    setActiveItem(activePage);
  }, []);

  return (
    <div>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <div className="navigation__nav">
          <ul className="navigation__list">
            <Link to="/" className="link-item">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/aboutUs" className="link-item">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  About Us
                </a>
              </li>
            </Link>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Technologies
              </a>
            </li>
            <Link to="/careers">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  careers
                </a>
              </li>
            </Link>
            <Link to="/contactUs">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Contact Us
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="header__logo-box">
        <img src={blssLogo} alt="blssLogo" className="header__logo" />
      </div>
      <div className="header__right-part">
        <p className="header__right-part--mail">
          hello@businesseslikeglobal.com &nbsp;&nbsp;&nbsp;/ &nbsp;+91 40
          79665661
        </p>
        {/* <Link>H</Link> */}
        <Link to="/contactUs">
          <button className="btn-gradient header__right-part--button">
            Contact Us
          </button>
        </Link>
        <div className="header__right-part--sections">
          {/* <span className="header__right-part--sections--item">Home</span>
          <span>Services</span> 
          <span>Careers</span>
          <span>About Us</span>
          <span>Domains & Technologies</span>
          <span>Contact Us</span> */}

          <div className="menu-bar">
            <ul>
              <Link to="/" className="link-item">
                <li>
                  <a className={activeItem === "/" ? "active" : ""} href="# ">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/aboutUs" className="link-item">
                <li>
                  <a
                    className={activeItem === "/aboutUs" ? "active" : ""}
                    href="# "
                  >
                    About Us
                  </a>
                </li>
              </Link>
              <li>
                <a
                  className={
                    activeItem === "/pegaConsulting" ||
                    activeItem === "/qualityManagement" ||
                    activeItem === "/managedServices" ||
                    activeItem === "/strategicApps" ||
                    activeItem === "/advisoryServices"
                      ? "active"
                      : ""
                  }
                  href="# "
                >
                  Services
                  {/* <span className="arrow-icon-cont"> */}
                  {/* <i className="arrow-icon icon-arrows-down"></i> */}
                  {/* </span> */}
                </a>
                {/* <i className="arrow-icon icon-arrows-down"></i> */}
                <div className="sub-menu-1">
                  <ul>
                    <Link to="/pegaConsulting" className="link-item">
                      <li>
                        <a href="# ">Pega Consulting</a>
                      </li>
                    </Link>
                    {/* <li className="hover-me">
                      <a href="# ">Mession</a>
                      <p className="angle-right">a</p>
                      <div className="sub-menu-2">
                        <ul>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                    <Link to="/qualityManagement" className="link-item">
                      <li>
                        <a href="# ">Quality Management</a>
                      </li>
                    </Link>
                    <Link to="/managedServices" className="link-item">
                      <li>
                        <a href="# ">Managed Services</a>
                      </li>
                    </Link>
                    <Link to="/strategicApps" className="link-item">
                      <li>
                        <a href="# ">Strategic Apps</a>
                      </li>
                    </Link>
                    <Link to="/advisoryServices" className="link-item">
                      <li>
                        <a href="# ">advisory Services</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>

              <Link to="" className="link-item">
                <li className="domains-li-item tech-li-item">
                  <a
                    className={activeItem === "/domains" ? "active" : ""}
                    href="# "
                  >
                    Technologies
                  </a>
                  <div className="sub-menu-1">
                    <ul>
                      {/* <li className="hover-me">
                      <a href="# ">Mession</a>
                      <p className="angle-right">a</p>
                      <div className="sub-menu-2">
                        <ul>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                          <li>
                            <a href="# ">Mession 2</a>
                          </li>
                        </ul>
                      </div>
                    </li> */}
                      <Link to="/pega" className="link-item">
                        <li>
                          <a href="# ">Pega</a>
                        </li>
                      </Link>
                      <Link className="link-item">
                        <li>
                          <a href="# ">Outsystems</a>
                        </li>
                      </Link>
                      <Link to="/reactJs" className="link-item">
                        <li>
                          <a href="# ">Full Stack (React and Node)</a>
                        </li>
                      </Link>
                      <Link className="link-item">
                        <li>
                          <a href="# ">Python</a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="/careers" className="link-item">
                <li>
                  <a
                    className={activeItem === "/careers" ? "active" : ""}
                    href="# "
                  >
                    Careers
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

// <div className="menu-bar">
//   <ul>
//     <Link to="/">
//       <li>
//         <a
//           className={activePage === "home" ? "activ" : "s"}
//           href="# "
//           onClick={() => handleClickMenuItem("home")}
//         >
//           {" "}
//           Home
//         </a>
//       </li>
//     </Link>
//     <Link to="/aboutUs">
//       <li>
//         <a
//           href="# "
//           onClick={() => handleClickMenuItem("aboutUs")}
//           className={activePage === "aboutUs" ? "active" : ""}
//         >
//           {" "}
//           About Us
//         </a>
//       </li>
//     </Link>
//     <li>
//       <a
//         href="# "
//         onClick={() => handleClickMenuItem("services")}
//         className={activePage === "services" ? "active" : ""}
//       >
//         {" "}
//         Services
//       </a>
//       <div className="sub-menu-1">
//         <ul>
//           <Link to="/pegaConsulting">
//             <li>
//               <a href="# ">Pega Consulting</a>
//             </li>
//           </Link>
//    <li className="hover-me">
//                       <a href="# ">Mession</a>
//                       <p className="angle-right">a</p>
//                       <div className="sub-menu-2">
//                         <ul>
//                           <li>
//                             <a href="# ">Mession 2</a>
//                           </li>
//                           <li>
//                             <a href="# ">Mession 2</a>
//                           </li>
//                           <li>
//                             <a href="# ">Mession 2</a>
//                           </li>
//                         </ul>
//                       </div>
//                     </li>
// //           <Link to="/qualityManagement">
// //             <li>
// //               <a href="# ">Quality Management</a>
// //             </li>
// //           </Link>
// //           <Link to="/managedServices">
// //             <li>
// //               <a href="# ">Managed Services</a>
// //             </li>
// //           </Link>
// //           <Link to="/strategicApps">
// //             <li>
// //               <a href="# ">Strategic Apps</a>
// //             </li>
// //           </Link>
// //           <Link to="/advisoryServices">
// //             <li>
// //               <a href="# ">advisory Services</a>
// //             </li>
// //           </Link>
// //         </ul>
// //       </div>
// //     </li>
// //     <Link to="/careers">
// //       <li>
// //         <a
// //           className={activePage === "careers" ? "active" : "s"}
// //           href="# "
// //           onClick={() => handleClickMenuItem("careers")}
// //         >
// //           {" "}
// //           Careers
// //         </a>
// //       </li>
// //     </Link>
// //     <li className="domains-li-item">
// //       <a href="# "> Domains & Technologies</a>
// //     </li>
// //   </ul>
// // </div>;
