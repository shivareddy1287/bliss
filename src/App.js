import "../src/sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import AboutUs from "./components/aboutUs/aboutUs";
import Careers from "./components/careers/careers";
import ContactUs from "./components/contactUs/contactUs";
import PegaConsulting from "./components/pegaConsulting/pegaConsulting";
import QualityManagement from "./components/qualityManagement/qualityManagement";
import ManagedServices from "./components/managedServices/managedServices";
import StrategicApps from "./components/stratagicApps/stratagicApps";
import advisoryServices from "./components/advisoryServices/advisoryServices";

import Pega from "./components/pega/pega";

import "./App.css";
// import Loader from "./components/loader/loader";
import ReactJS from "./components/reactJs/reactjs";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/aboutUs" Component={AboutUs} />
          <Route exact path="/careers" Component={Careers} />
          <Route exact path="/contactUs" Component={ContactUs} />
          <Route exact path="/pegaConsulting" Component={PegaConsulting} />
          <Route
            exact
            path="/qualityManagement"
            Component={QualityManagement}
          />
          <Route exact path="/managedServices" Component={ManagedServices} />
          <Route exact path="/strategicApps" Component={StrategicApps} />
          <Route exact path="/advisoryServices" Component={advisoryServices} />
          <Route exact path="/pega" Component={Pega} />
          <Route exact path="/reactJs" Component={ReactJS} />
        </Routes>
      </BrowserRouter>
      {/* <Pega /> */}

      {/* <Slider>
        <div className="our-expertise-card">
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
          <p>hai</p>
        </div>
      </Slider> */}
      <div className="our-expertise-card">
        <div className="our-expertise-card__top"></div>
        <div className="our-expertise-card__bottom"></div>
      </div>
    </div>
  );

  // render() {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
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
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  // };
  // return (
  //   <div className="oe-card">
  //     <div className="our-expertise-slider">
  //       <h2> Our Expertise </h2>
  //       <Slider {...settings}>
  //         <div>
  //           {/* <h3>1</h3> */}
  //           <img className="our-expertise-slider__image" src={node} />
  //         </div>
  //         <div>
  //           {/* <h3>2</h3> */}
  //           <img className="our-expertise-slider__image" src={python} />
  //         </div>
  //         <div>
  //           {/* <h3>3</h3> */}
  //           <img className="our-expertise-slider__image" src={mongo} />
  //         </div>
  //         <div>
  //           {/* <h3>4</h3> */}
  //           <img className="our-expertise-slider__image" src={react} />
  //         </div>
  //         <div>
  //           {/* <h3>5</h3> */}
  //           <img className="our-expertise-slider__image" src={outsystems} />
  //         </div>
  //         <div>
  //           {/* <h3>6</h3> */}
  //           <img className="our-expertise-slider__image" src={react} />
  //         </div>
  //         <div>
  //           {/* <h3>7</h3> */}
  //           <img className="our-expertise-slider__image" src={react} />
  //         </div>
  //         <div>
  //           {/* <h3>8</h3> */}
  //           <img className="our-expertise-slider__image" src={react} />
  //         </div>
  //       </Slider>
  //     </div>
  //   </div>
  // );
  // }
}

export default App;
// <!-- <section className="grid-test">
//       <div className="row">
//         <div className="col-1-of-2">Col 1 of 2</div>
//         <div className="col-1-of-2">Col 1 of 2</div>
//       </div>
//       <div className="row">
//         <div className="col-1-of-3">Col 1 of 3</div>
//         <div className="col-1-of-3">Col 1 of 3</div>
//         <div className="col-1-of-3">Col 1 of 3</div>
//       </div>
//       <div className="row">
//         <div className="col-1-of-3">Col 1 of 3</div>
//         <div className="col-2-of-3">Col 2 of 3</div>
//       </div>
//       <div className="row">
//         <div className="col-1-of-4">Col 1 of 4</div>
//         <div className="col-1-of-4">Col 1 of 4</div>
//         <div className="col-1-of-4">Col 1 of 4</div>
//         <div className="col-1-of-4">Col 1 of 4</div>
//       </div>
//       <div className="row">
//         <div className="col-1-of-4">Col 1 of 4</div>
//         <div className="col-1-of-4">Col 1 of 4</div>
//         <div className="col-2-of-4">Col 2 of 4</div>
//       </div>
//       <div className="row">
//         <div className="col-1-of-4">Col 1 of 4</div>

//         <div className="col-3-of-4">Col 3 of 4</div>
//       </div>
//     </section> -->
