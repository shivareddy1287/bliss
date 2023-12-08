import userFriendlyImg from "../../assets/user-friendly.png";
import scalabilityImg from "../../assets/scalability.jpg";
import uniqueBranding from "../../assets/unique-branding.jpg";
import CloudSetup from "../../assetsIconImgs/cloud-icon.png";

//icons
import financialAdvisorImg from "../../assetsIconImgs/financial-advisor.png";
import webDevelopmentImg from "../../assetsIconImgs/web-development.png";
import automationImg from "../../assetsIconImgs/automation.png";
import productDesignImg from "../../assetsIconImgs/info.png";
import implimentationImg from "../../assetsIconImgs/planning.png";

import review from "../../assetsIconImgs/review.png";
import team from "../../assetsIconImgs/team (1).png";
import backend from "../../assetsIconImgs/backend.png";
import infrastructure from "../../assetsIconImgs/infrastructure.png";
import Footer from "../footer/footer";
import TopHeader from "../topHeader/topHeader";

function ReactJS() {
  return (
    <div className="pega">
      <TopHeader />
      {/* <div className="u-center-text u-margin-bottom-medium u-margin-top-big">
        <h2 className="heading-professional">Pega</h2>
        <p className="paragraph"> 
          The Pega Platform blends together a unique combination of the
          capabilities of the Digital Transformation Revolution allowing you to
          build quickly, automate intelligently and scale with confidence.
        </p>
      </div> */}
      <div className="u-center-text u-margin-bottom-medium  u-margin-top-very-huge">
        <h2 className="heading-professional">React Js</h2>
      </div>
      <div className="u-center-text">
        <p className="content-width services__paragraph">
          We develop custom web applications that fit any screen size. No matter
          what challenges your business faces, we solve them with end-to-end web
          app development .
        </p>
      </div>

      <div className="row">
        <h3 className="pega__coe-head u-center-text">
          About Our Web Development Services
        </h3>
        <div className="col-1-of-2">
          <img src={userFriendlyImg} className="pega__img" />
        </div>
        <div className="col-1-of-2">
          <h1 className="tech-heading">User-Friendliness</h1>
          <p className="pega__paragraph">
            The success of any business is highly dependent on the usability of
            a website. By providing your users with a seamless experience, you
            keep their attention and increase the conversion rate. Bitblue team
            always takes a user-first approach to website development services
            and ensures your audience is delighted with the solution.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h1 className="tech-heading">Scalability</h1>
          <p className="pega__paragraph">
            Building a full-fledged product from scratch might appear to be
            quite a resource-consuming endeavor, especially if you run a startup
            and need to bring your product to market as quickly as possible. Why
            don’t you start with an MVP? We can create a minimum version of your
            product and scale it later based on the user feedback.
          </p>
        </div>
        <div className="col-1-of-2">
          <img src={scalabilityImg} className="pega__img" />
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <img src={uniqueBranding} className="pega__img" />
        </div>
        <div className="col-1-of-2">
          <h1 className="tech-heading">Unique Brand Identity</h1>
          <p className="pega__paragraph">
            There are more than 1.7 billion websites on the net, and most of
            them look similar. To make your business stand out in such a
            competitive digital landscape, you’ll need an unconventional and
            catchy design. Our web design company will create your brand
            identity that will resonate with your target audience.
          </p>
        </div>
      </div>

      <div className="tech-cards-cont">
        <div className="u-center-text u-margin-bottom-small  u-margin-top-medium">
          <h2 className="heading-professional">Challenges & Solution</h2>
        </div>
        <div className="tech-container">
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>01</h2>
                <img className="pega__card__img" src={financialAdvisorImg} />

                <div>
                  <h3>Advisory Services</h3>
                  <p className="paragraph">
                    Our Business Advisory team creates and provides
                    personalized, inventive, and complete solutions for specific
                    client business needs that do not necessitate the expression
                    of professional opinions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>02</h2>
                <img className="pega__card__img" src={webDevelopmentImg} />
                <div>
                  <h3>Application Development</h3>
                  <p className="paragraph">
                    The development of business advising services allows
                    customers to benefit from ITnow employees’ unique
                    experiences, views, understanding of industry business
                    challenges, and technological competence .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>03</h2>
                <img className="pega__card__img" src={implimentationImg} />
                <div>
                  <h3>Implementation Services</h3>
                  <p className="paragraph">
                    Our developers rapidly build content-rich sites with
                    ready-to-use templates, or syndicate content to existing
                    web, mobile, and digital assistant channels as well as
                    enterprise apps to deliver .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>04</h2>
                <img className="pega__card__img" src={automationImg} />
                <div>
                  <h3>Automation Services</h3>
                  <p className="paragraph">
                    Data holds the key to any successful transaction monitoring
                    implementation. Understanding client needs, infrastructure
                    limits, and financial industry data architectures is
                    crucial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>05</h2>
                <img className="pega__card__img" src={productDesignImg} />
                <div>
                  <h3>Product Designing </h3>
                  <p className="paragraph">
                    BusinessLike software Solutions is a cloud native content
                    management platform that offers powerful collaboration,
                    workflow management, and machine-learning–based tagging
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReactJS;
