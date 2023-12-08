import "../src/sass/main.scss";
// import "../src/css/arrows.css";
import "../src/css/icon-font.css";

import { Link } from "react-router-dom";

// Header Imgs
import headerImg1 from "../src/assets/header-wallpaper.jpeg";

//Home Images

import empower1 from "../src/assets/empower1.jpg";
import empower2 from "../src/assets/empower2.jpg";
import empower3 from "../src/assets/empower-3.png";

//Careers Images

// import career1 from "../src/assets/career1.jpg";
// import career2 from "../src/assets/career2.jpg";
// import career3 from "../src/assets/career3.jpg";

//Domians Image
import domain1 from "../src/assets/domain1.jpg";
import domain2 from "../src/assets/domain2.jpg";

//Blog Images
import socialMedia from "../src/assets/sm.jpg";
import guestBlog from "../src/assets/guest-blog.jpg";
import technology from "../src/assets/technology.jpg";

import TopHeader from "./components/topHeader/topHeader";
import Footer from "./components/footer/footer";

import homeImg1 from "../src/assets/nat-1-large.jpg";
import homeImg2 from "../src/assets/nat-2-large.jpg";
import homeImg3 from "../src/assets/nat-3-large.jpg";
import storiesImg1 from "../src/assets/nat-8.jpg";
import storiesImg2 from "../src/assets/nat-9.jpg";

import vedio1 from "../src/assets/video.mp4";
import vedio2 from "../src/assets/video.webm";
import globeVedio from "../src/assetsVedios/video.mp4";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";

function Home() {
  // const [showLoader, setShowLoader] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 5000);
  // });

  // useEffect(() => {
  //   // Use setTimeout to change the state after 5 seconds
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 5000); // 5000 milliseconds = 5 seconds

  //   // Clear the timer if the component unmounts or if you want to cancel it for some reason
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  return (
    <div className="App">
      {/* {showLoader && <Loader />} */}

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
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                careers
              </a>
            </li>
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
      <TopHeader />
      {/* <div className="bg-video margin-try">
        <video
          className="bg-video__content"
          autoPlay
          muted
          loop
          onEnded={(e) => {
            e.target.play();
          }}
        >
          <source src={vedio1} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div> */}

      <header class="header" id="home">
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">
              Driving excellence through
            </span>
            <span class="heading-primary--sub">
              BusinessLike Software solutions
            </span>
          </h1>
          <a href="#b" class="btn btn--white">
            Know more...
          </a>
        </div>
        <img class="header__image" src={headerImg1} alt="header-img" />
        <div class="header__bg"></div>
      </header>
      {/* <header class="header">
        <div class="header__logo-box">
          
        </div>
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Outdoors</span>
            <span class="heading-primary--sub">is where life happens</span>
          </h1>
          <a href="#" class="btn btn--white">
            Discover Our tours
          </a>
        </div>
      </header> */}
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Empower Your Business with PEGA
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-teritory u-margin-bottom-small">
                Streamline Operations and Drive Efficiency
              </h3>
              <p className="paragraph">
                PEGA offers a powerful business process management (BPM) and
                rules engine that enables organizations to streamline their
                operations and enhance efficiency. By automating repetitive
                tasks and optimizing workflows, PEGA helps businesses reduce
                manual errors, minimize operational costs, and improve overall
                productivity. With PEGA, you can achieve greater operational
                agility and ensure consistent execution of processes across your
                organization.
              </p>

              <h3 className="heading-teritory u-margin-bottom-small">
                Accelerate Innovation with Low-Code Development
              </h3>
              <p className="paragraph">
                PEGA's low-code development environment revolutionizes the way
                applications are built and customized. With PEGA, developers and
                business users can collaborate effectively, leveraging visual
                tools and pre-built components to rapidly design, develop, and
                deploy applications.
              </p>
              <a href="#" className="btn-text">
                Learn more &rarr;
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={empower1}
                  alt="homeImg"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src={empower2}
                  alt="homeImg"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src={empower3}
                  alt="homeImg"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary text-color-white">
              Solutions for Every Business need
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world"></i>

                <h3 className="heading-teritory u-margin-bottom-small">
                  Process Optimization
                </h3>
                <p className="feature-box_text">
                  Optimizing your business processes is essential for achieving
                  operational efficiency and maximizing productivity.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass"></i>
                <h3 className="heading-teritory u-margin-bottom-small">
                  Customer Engagement
                </h3>
                <p className="feature-box_text">
                  Delivering exceptional customer engagement and experience is
                  key to building strong relationships.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map"></i>
                <h3 className="heading-teritory u-margin-bottom-small">
                  Digital Transformation
                </h3>
                <p className="feature-box_text">
                  In today's digital age, embracing digital transformation is
                  critical for staying competitive.
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart"></i>
                <h3 className="heading-teritory u-margin-bottom-small">
                  Risk Management
                </h3>
                <p className="feature-box_text">
                  Protecting your business from cybersecurity threats and
                  managing risks is paramount in today's interconnected world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Careers</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Opportunities
                    </span>
                  </h4>
                  <div className="card__details">
                    <h3 className="heading-teritory u-margin-bottom-small">
                      Skill Development
                    </h3>
                    <p className="paragraph">
                      Employees are provided with various opportunities to
                      enhance their skills and knowledge through training
                      programs, workshops, and seminars. This allows them to
                      acquire new competencies, stay up-to-date with industry
                      trends, and improve their professional capabilities.
                    </p>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    {/* <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn">
                      Book Now
                    </a> */}

                    <div className="card__side--back--small-screen">
                      <h3 className="heading-teritory u-margin-bottom-small text-color-white u-center-text">
                        OPPORTUNITIES
                      </h3>
                    </div>
                    <div className="paragraph text-color-white">
                      <div className="card__side--back--small-screen">
                        <h3 className="heading-teritory u-margin-bottom-very-small">
                          Skill Development :
                        </h3>
                        <p className="popup__text">
                          Employees are provided with various opportunities to
                          enhance their skills and knowledge through training
                          programs, workshops, and seminars. This allows them to
                          acquire new competencies, stay up-to-date with
                          industry trends, and improve their professional
                          capabilities.
                        </p>
                      </div>
                      <h3 className="heading-teritory u-margin-bottom-very-small">
                        {/* <!-- Important &ndash; Please read these terms before booking --> */}
                        Career Advancement:
                      </h3>
                      <p className="popup__text">
                        The organization values employee growth and offers
                        opportunities for promotion and advancement within the
                        company. This allows individuals to progress in their
                        careers, take on new responsibilities, and expand their
                        professional horizons.
                      </p>
                    </div>
                    {/* <a href="#popup1" className="btn">
                      Detailed View
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      Rewards
                    </span>
                  </h4>
                  <div className="card__details">
                    {/* <ul>
                      <li>3 day tours</li>
                      <li>2 tour guides</li>
                      <li>upto 30 people</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficuly:easy</li>
                    </ul> */}
                    <h3 className="heading-teritory u-margin-bottom-small">
                      Recognition and Appreciation
                    </h3>
                    <p className="paragraph">
                      The organization has a culture of recognizing and
                      appreciating employees' efforts and achievements. This can
                      be through regular performance feedback, employee of the
                      month awards, or other forms of recognition that
                      acknowledge and celebrate individual and team
                      accomplishments.
                    </p>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    {/* <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn">
                      Book Now
                    </a> */}
                    <div className="card__side--back--small-screen">
                      <h3 className="heading-teritory u-margin-bottom-small text-color-white u-center-text">
                        REWARDS
                      </h3>
                    </div>

                    <div className="paragraph text-color-white">
                      <div className="card__side--back--small-screen">
                        <h3 className="heading-teritory u-margin-bottom-very-small">
                          {/* <!-- Important &ndash; Please read these terms before booking --> */}
                          Competitive Salary:
                        </h3>
                        <p className="popup__text">
                          The organization offers a competitive salary
                          structure, ensuring that employees are fairly
                          compensated for their skills, experience, and
                          contributions. This enables employees to enjoy
                          financial stability and recognize the value they bring
                          to the organization.
                        </p>
                      </div>
                      <h3 className="heading-teritory u-margin-bottom-very-small">
                        {/* <!-- Important &ndash; Please read these terms before booking --> */}
                        Benefits Package:
                      </h3>
                      <p className="popup__text">
                        In addition to a competitive salary, employees receive a
                        comprehensive benefits package that may include health
                        insurance, retirement plans, paid time off, and other
                        perks. These benefits contribute to their overall
                        well-being and job satisfaction.
                      </p>
                    </div>
                    {/* <a href="#popup2" className="btn">
                      Detailed View
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3"></div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      Growing Salary
                    </span>
                  </h4>
                  <div className="card__details">
                    {/* <ul>
                      <li>3 day tours</li>
                      <li>2 tour guides</li>
                      <li>upto 30 people</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Difficuly:easy</li>
                    </ul> */}
                    <h3 className="heading-teritory u-margin-bottom-small">
                      Performance-Based Increases
                    </h3>
                    <p className="paragraph">
                      As employees consistently demonstrate their skills and
                      achieve their goals, they become eligible for
                      performance-based salary increases. These increases are
                      reflective of their contributions and help to reward and
                      motivate their continued growth.
                    </p>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    {/* <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn">
                      Book Now
                    </a> */}

                    <div className="card__side--back--small-screen">
                      <h3 className="heading-teritory u-margin-bottom-small text-color-white u-center-text">
                        GROWING SALARY
                      </h3>
                    </div>
                    <div className="paragraph text-color-white">
                      <div className="card__side--back--small-screen">
                        <h3 className="heading-teritory u-margin-bottom-very-small">
                          {/* <!-- Important &ndash; Please read these terms before booking --> */}
                          Performance-Based Increases:
                        </h3>
                        <p className="popup__text">
                          As employees consistently demonstrate their skills and
                          achieve their goals, they become eligible for
                          performance-based salary increases. These increases
                          are reflective of their contributions and help to
                          reward and motivate their continued growth.
                        </p>
                      </div>
                      <h3 className="heading-teritory u-margin-bottom-very-small">
                        {/* <!-- Important &ndash; Please read these terms before booking --> */}
                        Merit-Based Promotions:
                      </h3>
                      <p className="popup__text">
                        As employees progress in their careers and take on
                        increased responsibilities, they become eligible for
                        promotions within the organization. Along with
                        promotions often come salary increases, allowing
                        employees to enjoy higher earning potential as they
                        advance.
                      </p>
                    </div>
                    {/* <a href="#popup3" className="btn">
                      Detailed View
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a className="btn btn--green">Discover more</a>
          </div>
        </section>
        <section className="section-domains u-margin-bottom-medium">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Domains</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="domains">
                <img src={domain1} className="domains__img" alt="" />
              </div>
            </div>
            <div className="col-1-of-2">
              <h3 className="domains__heading u-margin-bottom-small">
                Health Care
              </h3>
              <p className="domains__paragraph">
                We work tirelessly towards improving healthcare through our BPM
                software. We help healthcare providers to leverage digital
                solutions to improve the quality of healthcare. We offer
                personalized healthcare solutions through our Pega technologies.
                Our end-to-end healthcare sector services can benefit many
                managements with digitalization. Our operating models,
                healthcare IT solutions, and customer management processes using
                Pega platforms can bring the change you desire.
              </p>
              <p className="domains__paragraph">
                At BusinessLike Software Solutions , we are committed to
                revolutionizing the healthcare industry by leveraging digital
                solutions and empowering healthcare providers to deliver
                high-quality care. We understand the unique challenges faced by
                the healthcare sector and are dedicated to creating innovative
                and tailored solutions that meet your specific needs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="domains__heading u-margin-bottom-small">
                Banking & Financials
              </h3>
              <p className="domains__paragraph">
                The changing market scenario is demanding banking and financial
                services enterprises to reconstruct their business models and
                technologies. At Instasmart, we help the financial sector
                through our Pega tailored framework. We have a deep Pega
                expertise that helps us conceptualize and design end-to-end
                products. We enhance customer experience and satisfaction by
                simplifying banking for them. Pega banking framework helps in
                reducing the cost and turnaround time We cover retail banking,
                mortgages, consumer finance, banking, cards & payments, asset
                and wealth management, and many more.
              </p>
              <p className="domains__paragraph">
                At BusinessLike Software Solutions , we understand the evolving
                landscape of the banking and financial services industry. Our
                expertise in the Pega platform allows us to address the unique
                challenges faced by our clients and deliver innovative solutions
                that drive their business growth. We are committed to empowering
                financial institutions with the tools and technologies they need
                to thrive in an ever-changing market scenario.
              </p>
            </div>
            <div className="col-1-of-2">
              <div className="domains">
                <img src={domain2} className="domains__img" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoplay muted loop>
              <source src={vedio1} type="video/mp4" />
              <source src={vedio2} type="video/webm" />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">
              Exciting tours for adventuros people
            </h2>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={storiesImg1}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">Mary Smith</figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Exciting tours for adventurous peopleExciting tours for
                  adventurous Exciting tours for adventurous peopleExciting
                  tours for adventurous peopleExciting tours for adventurous
                  people Exciting tours for adventurous people peopleExciting
                  tours for adventurous people Exciting tours for adventurous
                  people
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={storiesImg2}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">Mary Smith</figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Exciting tours for adventurous peopleExciting tours for
                  adventurous Exciting tours for adventurous peopleExciting
                  tours for adventurous peopleExciting tours for adventurous
                  people Exciting tours for adventurous people peopleExciting
                  tours for adventurous people Exciting tours for adventurous
                  people
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <a href="" className="btn-text">
              Discover all Toures &rarr;
            </a>
          </div>
        </section> */}
        {/* <section className="section-stories" id="news">
          <div className="bg-video">
            <video className="bg-video__content" autoplay muted loop>
              <source src={vedio1} type="video/mp4" />
              <source src={vedio2} type="video/webm" />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">
              Our blog, you should not missiIt
            </h2>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={socialMedia}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">
                  Social Media
                </figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  SOCIAL MEDIA
                </h3>
                <p>
                  In today's digital age, social media has become a powerful
                  tool for businesses to connect with their target audience and
                  build brand awareness. One effective strategy that many small
                  businesses employ is influencer marketing. By collaborating
                  with influential individuals who have a large following on
                  social media platforms, businesses can leverage their reach
                  and credibility to promote their products or services.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={technology}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">Techno logy</figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  TECHNOLOGY
                </h3>
                <p>
                  In our fast-paced and interconnected world, anxiety and stress
                  have become increasingly prevalent in everyday life. These
                  challenges not only affect individuals but also have a
                  significant impact on families, communities, and even the
                  workplace. Mental health problems, if left unaddressed, can
                  lead to decreased productivity, increased absenteeism, and a
                  negative work environment.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={guestBlog}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption u-color-black">
                  Guest Blog
                </figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  GUEST BLOG
                </h3>
                <p>
                  As a working parent, finding the balance between work and
                  family life can be a juggling act. Like many parents, I
                  cherish those precious hours when my four-year-old is at
                  nursery, providing me with a window of uninterrupted work
                  time. From 8 am to 12 pm, the house becomes my makeshift
                  office, and I dive into my tasks, fueled by a hot cup of
                  coffee.
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <a href="#b" className="btn-text">
              all careers &rarr;
            </a>
          </div>
        </section> */}

        <section class="section-stories">
          {/* <div class="bg-video">
            <video
              className="bg-video__content"
              autoPlay
              muted
              loop
              onEnded={(e) => {
                e.target.play();
              }}
            >
              <source src={vedio1} type="video/mp4" />
              <source src={vedio2} type="video/webm" />
              Your browser is not supported!
            </video>
          </div> */}
          <div className="bg-video ">
            <video
              className="bg-video__content"
              autoPlay
              muted
              loop
              onEnded={(e) => {
                e.target.play();
              }}
            >
              <source src={vedio1} type="video/mp4" />
              Your browser is not supported!
            </video>
          </div>

          <div className="u-center-text u-margin-bottom-medium">
            <h2 className="heading-secondary">
              Our blog, you should not missiIt
            </h2>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={socialMedia}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">
                  Social Media
                </figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  SOCIAL MEDIA
                </h3>
                <p>
                  In today's digital age, social media has become a powerful
                  tool for businesses to connect with their target audience and
                  build brand awareness. One effective strategy that many small
                  businesses employ is influencer marketing. By collaborating
                  with influential individuals who have a large following on
                  social media platforms, businesses can leverage their reach
                  and credibility to promote their products or services.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={technology}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption">Techno logy</figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  TECHNOLOGY
                </h3>
                <p>
                  In our fast-paced and interconnected world, anxiety and stress
                  have become increasingly prevalent in everyday life. These
                  challenges not only affect individuals but also have a
                  significant impact on families, communities, and even the
                  workplace. Mental health problems, if left unaddressed, can
                  lead to decreased productivity, increased absenteeism, and a
                  negative work environment.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="storey">
              <figure className="storey__shape">
                <img
                  src={guestBlog}
                  alt="Person on a tour"
                  className="storey__img"
                />
                <figcaption className="storey__caption u-color-black">
                  Guest Blog
                </figcaption>
              </figure>
              <div className="storey__text">
                <h3 className="heading-teritory u-margin-bottom-small">
                  GUEST BLOG
                </h3>
                <p>
                  As a working parent, finding the balance between work and
                  family life can be a juggling act. Like many parents, I
                  cherish those precious hours when my four-year-old is at
                  nursery, providing me with a window of uninterrupted work
                  time. From 8 am to 12 pm, the house becomes my makeshift
                  office, and I dive into my tasks, fueled by a hot cup of
                  coffee.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="u-center-text u-margin-bottom-big">
            <a href="#b" className="btn-text">
              all careers &rarr;
            </a>
          </div> */}
        </section>

        {/* <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start Book Now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      id="name"
                      required
                    />
                    <label for="name" className="form__label">
                      Full Name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Emai"
                      id="email"
                      required
                    />
                    <label for="emai" className="form__label">
                      Email address
                    </label>
                  </div>
                  <div className="form__group">
                    <div className="form__radio">
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="small"
                          name="size"
                        />
                        <label for="small" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          Small tour group
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input
                          type="radio"
                          className="form__radio-input"
                          id="large"
                          name="size"
                        />
                        <label for="large" className="form__radio-label">
                          <span className="form__radio-button"></span>
                          large tour group
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img src={homeImg1} alt="Tour_Photo" className="popup__img" />
            <img src={homeImg2} alt="Tour_Photo" className="popup__img" />
          </div>
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Start Booking Now
            </h2>
            <h3 className="heading-teritory u-margin-bottom-small">
              Important &ndash; Please read these terms before booking
            </h3>
            <p className="popup__text">
              Exciting tours for adventurous people Exciting tours for
              adventurous people Exciting tours for adventurous people Exciting
              tours for adventurous people Exciting tours for adventurous people
              Exciting tours for adventurous people Exciting tours for
              adventurous people Exciting tours for adventurous people Exciting
              tours for adventurous people Exciting tours for adventurous people
              Exciting tours for adventurous people Exciting tours for
              adventurous people Exciting tours for adventurous people Exciting
              tours for adventurous people Exciting tours for adventurous people
              Exciting tours for adventurous people Exciting tours for
              adventurous people Exciting tours for adventurous people Exciting
              tours for adventurous people Exciting tours for adventurous people
            </p>
            <a href="#" className="btn--green2">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
