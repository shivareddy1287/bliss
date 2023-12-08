import blssLogo from "../../assets/blsslogo.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import react from "../../assetTechnologies/react.png";
import node from "../../assetTechnologies/node.png";
import python from "../../assetTechnologies/python.png";
import pega from "../../assetTechnologies/pega.png";

import mongo from "../../assetTechnologies/mongo.png";

import outsystems from "../../assetTechnologies/outsystems.jpg";

// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

function Footer() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      <div className="oe-card">
        <div className="our-expertise-slider">
          <h2 className="our-expertise-slider__heading"> Our Expertise </h2>
          <hr />
          <Slider {...settings}>
            <div>
              {/* <h3>1</h3> */}
              <img className="our-expertise-slider__image" src={node} />
            </div>
            <div>
              {/* <h3>2</h3> */}
              <img className="our-expertise-slider__image" src={python} />
            </div>
            <div>
              {/* <h3>3</h3> */}
              <img className="our-expertise-slider__image" src={mongo} />
            </div>
            {/* <div>
              
              <img className="our-expertise-slider__image" src={react} />
            </div> */}
            <div>
              {/* <h3>5</h3> */}
              <img className="our-expertise-slider__image" src={outsystems} />
            </div>
            <div>
              {/* <h3>6</h3> */}
              <img className="our-expertise-slider__image" src={react} />
            </div>
            {/* <div>
              
              <img className="our-expertise-slider__image" src={react} />
            </div> */}
            <div>
              {/* <h3>8</h3> */}
              <img className="our-expertise-slider__image" src={pega} />
            </div>
          </Slider>
        </div>
      </div>
      <footer className="footer" id="contact-us">
        <div className="footer__logo-box">
          <img src={blssLogo} alt="Full Logo" className="footer__logo" />
        </div>

        <div className="row all-items">
          <div className="col-1-of-5">
            <h3 className="heading-teritory u-margin-bottom-small sm-text-center">
              Company
            </h3>
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Home
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.linkedin.com/company/businesslike-software-solutions/mycompany/"
                    target="_blank"
                    className="footer__link"
                  >
                    About Us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Careers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-5">
            <h3 className="heading-teritory u-margin-bottom-small sm-text-center">
              Services
            </h3>
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Quality Management
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Managed Services
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Strategic Apps
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Advisory Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-5">
            <h3 className="heading-teritory u-margin-bottom-small sm-text-center">
              Technologies
            </h3>
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Pega
                  </a>
                </li>

                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Full Stack (React and Node)
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Python
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Outsystems
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-5">
            <h3 className="heading-teritory u-margin-bottom-small sm-text-center">
              Disclosure
            </h3>
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Terms and Conditions
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#b" className="footer__link">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-5">
            <h3 className="heading-teritory u-margin-bottom-small sm-text-center">
              Contact Us
            </h3>

            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <p href="#b" className="">
                    hello@businesslikeglobal.com
                  </p>
                </li>
                <li className="footer__item">
                  <p href="#b" className="">
                    Block 2A, Vaishnavi Cynosure, Gachibowli, Hyderabad-500032,
                    Telangana
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="navigation-footer">
        <div className="row">
          <div className="navigation-footer__icons">
            <img className="footer__sm-icons" alt="facebook" src={facebook} />
            <img className="footer__sm-icons" alt="facebook" src={linkedin} />
            <img className="footer__sm-icons" alt="facebook" src={twitter} />
            <p className="paragraph">
              © 2023 Businesslike Software Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
