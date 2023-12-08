import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

import AboutUsImg1 from "../../assets/nat-8.jpg";
import AboutUsImg2 from "../../assets/02_About_Image_2.jpg";
import AboutUsImg3 from "../../assets/02_About_Image_3.jpg";
import mission from "../../assetsIconImgs/mission.png";
import vision from "../../assetsIconImgs/vision.png";
// blss/src/assets/02_About_Image_2.jpg
// blss/src/assets/02_About_Image_3.jpg
function AboutUs() {
  return (
    <div className="aboutUs">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium  u-margin-top-very-huge">
        <h2 className="heading-professional">About Us</h2>
      </div>
      {/* <div className="row">
        <h2 className="aboutUs__heading-primary">
          BusinessLike Software Solutions
        </h2>
      </div> */}

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="aboutUs__heading-secondary">
          We deliver expertise that you can trust.
        </h2>
        <br />
        <p className="aboutUs__passage">
          Challenging ourselves to bring new and original ways of thinking.
        </p>
      </div>
      <div className="aboutUs-top-container">
        <div className="row">
          <div className="u-center-text u-margin-bottom-big ">
            <h2 className="heading-secondary2">
              The Innovative Space To Get Quality IT Solutions
            </h2>
          </div>
          <div class="col-1-of-2 u-text-color-white">
            <h2 className="aboutUs__heading-tertiory">
              A perfect place to search for IT solutions for your company
            </h2>
            <p className="aboutUs__paragraph">
              At Businesslike Software Solutions, we realise that when it comes
              to achieving good results, you need a rigorously maintained
              vision, which in turn helps you achieve the goals you set for your
              business. We realise that technology and business are constantly
              evolving. There are new opportunities for growth and change every
              day.
            </p>
          </div>
          <div className="col-1-of-2">
            <img
              src={AboutUsImg2}
              className="aboutUs-top-container__img"
              alt="about-us-img"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <img
              src={AboutUsImg2}
              className="aboutUs-top-container__img"
              alt="about-us-img"
            />
          </div>
          <div class="col-1-of-2 u-text-color-white">
            <h2 className="aboutUs__heading-tertiory">
              A perfect place to search for IT solutions for your company
            </h2>
            <p className="aboutUs__paragraph">
              At Businesslike Software Solutions, we realise that when it comes
              to achieving good results, you need a rigorously maintained
              vision, which in turn helps you achieve the goals you set for your
              business. We realise that technology and business are constantly
              evolving. There are new opportunities for growth and change every
              day.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutUs-Why-choose-us u-margin-top-medium u-margin-bottom-big  u-center-text  ">
        <h2 className="heading-secondary2 u-margin-bottom-small">
          Why Choose Us ?
        </h2>
        <p className="aboutUs-Why-choose-us__passage">
          BusinessLike Global Software Solutions has extensive experience in
          providing IT consulting, development, maintenance and deployment
          services, information management and assessment solutions, CRM and
          process automation as well as setting up Extended Development Centers.
          With our unique delivery models our clients have been able to benefit
          at reasonable capital cost. Through our controlled processes we are
          able to execute highly technical projects within scope, on time, and
          within budget.
        </p>
        <img src={AboutUsImg3} className="aboutUs-Why-choose-us__img" />
        <div class="row">
          <div class="col-1-of-2">
            <div className="WCU-card">
              {/* <i className="feature-box__icon icon-basic-world"></i> */}
              <img className="careers__card__icon" src={mission} />
              <div className="WCU-card__text-card">
                <h3 className="WCU-card__text-card__heading">Mission</h3>
                <p className="WCU-card__text-card__paragraph">
                  Understanding the customer requirements at their best.
                  Proposing the most technologically advanced, best quality, and
                  cost-effective solutions. Keeping ever-lasting relationships
                  and trust. Keeping the company technologically up-to-date and
                  quality conscious.
                </p>
              </div>
            </div>
          </div>
          <div class="col-1-of-2">
            <div className="WCU-card">
              {/* <i className="feature-box__icon icon-basic-world"></i> */}
              <img className="careers__card__icon" src={vision} />
              <div className="WCU-card__text-card">
                <h3 className="WCU-card__text-card__heading">Vision</h3>
                <p className="WCU-card__text-card__paragraph">
                  We aim to become one of the best global IT solutions providers
                  by creating a great working environment where our people are
                  inspired and motivated to serve our customers at the best they
                  can and a good investment location where the share-owners are
                  guaranteed long-term returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
