import Coe from "../../assets/coe.webp";
import CloudSetup from "../../assetsIconImgs/cloud-icon.png";
import review from "../../assetsIconImgs/review.png";
import team from "../../assetsIconImgs/team (1).png";
import backend from "../../assetsIconImgs/backend.png";
import infrastructure from "../../assetsIconImgs/infrastructure.png";
import Footer from "../footer/footer";
import TopHeader from "../topHeader/topHeader";

function Pega() {
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
        <h2 className="heading-professional">Pega</h2>
      </div>
      <div className="u-center-text">
        <p className="content-width services__paragraph">
          A Pega trusted digital transformation expert providing IT solutions
          and services with a range of expertise that is on a global scale.
        </p>
      </div>

      <div className="row">
        <h3 className="pega__coe-head u-center-text">Centre of Excellence</h3>
        <div className="col-1-of-2">
          <img src={Coe} className="pega__img" />
        </div>
        <div className="col-1-of-2">
          <p className="pega__paragraph">
            A Pega CoE is one of the key pillars to achieving effective
            governance in your Pega landscape. With the right set-up and
            governance model, your CoE should ensure faster and more agile
            scaling of your application(s). Our team of experts have experience
            of setting up CoEs in many organizations across multiple industries
            and hacan provide you with all the tools you need to run a CoE.
          </p>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-1-of-2">
          <div className="pega__card">
            <img className="pega__card__img" src={CloudSetup} />
            <div>
              <h3>Cloud Set-up</h3>
              <p className="paragraph">
                Cloud setup involves deploying and configuring cloud
                infrastructure and services to host applications and store data
                in cloud environments.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="pega__card">
            <img className="pega__card__img" src={infrastructure} />
            <div>
              <h3>Infrastructure</h3>
              <p className="paragraph">
                Implement caching mechanisms, content delivery networks (CDNs),
                and load balancers to enhance application responsiveness and
                reduce latency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="pega__card">
            <img className="pega__card__img" src={backend} />
            <div>
              <h3>E2E Development (End-to-End Development)</h3>
              <p className="paragraph">
                E2E development refers to the complete software development
                lifecycle, from gathering requirements to deployment and
                maintenance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="pega__card">
            <img className="pega__card__img" src={team} />
            <div>
              <h3>Expert Staff Augmentation</h3>
              <p className="paragraph">
                Expert staff augmentation is a strategy to supplement an
                organization's workforce by hiring external professionals on a
                temporary basis to fill specific skill gaps or meet project
                demands.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="pega__card">
            <img className="pega__card__img" src={review} />
            <div>
              <h3>Design Review</h3>
              <p className="paragraph">
                Assess the overall system architecture to ensure that it aligns
                with business goals and supports future growth.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="row"> */}
      <div className="tech-cards-cont">
        <div className="u-center-text u-margin-bottom-small  u-margin-top-medium">
          <h2 className="heading-professional">
            Enterprise Architecture optimization
          </h2>
        </div>
        <div className="tech-container">
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>01</h2>
                <img className="pega__card__img" src={CloudSetup} />

                <div>
                  <h3>Cloud Set-up</h3>
                  <p className="paragraph">
                    Cloud setup involves deploying and configuring cloud
                    infrastructure and services to host applications and store
                    data in cloud environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>02</h2>
                <img className="pega__card__img" src={infrastructure} />
                <div>
                  <h3>Infrastructure</h3>
                  <p className="paragraph">
                    Implement caching mechanisms, content delivery networks
                    (CDNs), and load balancers to enhance application
                    responsiveness and reduce latency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>03</h2>
                <img className="pega__card__img" src={backend} />
                <div>
                  <h3>E2E Development (End-to-End Development)</h3>
                  <p className="paragraph">
                    E2E development refers to the complete software development
                    lifecycle, from gathering requirements to deployment and
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>04</h2>
                <img className="pega__card__img" src={team} />
                <div>
                  <h3>Expert Staff Augmentation</h3>
                  <p className="paragraph">
                    Expert staff augmentation is a strategy to supplement an
                    organization's workforce by hiring external professionals on
                    a temporary basis to fill specific skill gaps or meet
                    project demands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-container__card">
            <div className="tech-container__card__box">
              <div className="tech-container__card__box__content">
                <h2>05</h2>
                <img className="pega__card__img" src={review} />
                <div>
                  <h3>Design Review</h3>
                  <p className="paragraph">
                    Assess the overall system architecture to ensure that it
                    aligns with business goals and supports future growth.
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

export default Pega;
