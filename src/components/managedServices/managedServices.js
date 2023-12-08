import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

function ManagedServices() {
  return (
    <div className="services">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional">Managed Services</h2>
      </div>
      <div className="row u-center-text">
        <div className="row u-margin-bottom-big">
          <div className="col-1-of-4">
            <div className="services__options-box ms-card">
              <h3 className="services__options-box__heading">
                Transformation Strategy
              </h3>
              <p className="paragraph">
                We procure a strategy for your business to upgrade and automate
                business processes for faster and better results.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box ms-card">
              <h3 className="services__options-box__heading">
                Opportunity Assessment
              </h3>
              <p className="paragraph">
                Our managed services diagnose the opportunities that your
                business might be missing and help you attain them.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box ms-card">
              <h3 className="services__options-box__heading">
                Application Management
              </h3>
              <p className="paragraph">
                We offer application management to organizations to sustain and
                maximize their business value through Pega technology.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box ms-card">
              <h3 className="services__options-box__heading">
                Infrastructure Management
              </h3>
              <p className="paragraph">
                Our infrastructure management helps organizations automate their
                infrastructural landscape with efficient business objectives.
              </p>
            </div>
          </div>
        </div>

        <h3 className="services__bpm-heading">We let our work speak for us</h3>
        <p className="services__bpm-passage">
          Our leading-edge and innovative solutions with a unique perspective
          help businesses discover new opportunities
        </p>

        <div class="row">
          <div class="col-1-of-2">
            <div className="flex-card">
              <i className="feature-box__icon icon-basic-world"></i>
              <div>
                <h1 className="flex-card__heading">Proven Pega Expertise</h1>
                <p className="flex-card__passage">
                  Our professionals have deep domain expertise for various
                  industries.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-card">
            <i className="feature-box__icon icon-basic-world"></i>
            <div>
              <h1 className="flex-card__heading">Advanced Technology</h1>
              <p className="flex-card__passage">
                We apply advanced technologies to all parts of our BPM
                life-cycle.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <div className="flex-card">
              <i className="feature-box__icon icon-basic-world"></i>
              <div>
                <h1 className="flex-card__heading">
                  Next-gen Managed Operations
                </h1>
                <p className="flex-card__passage">
                  We offer complete monitoring and on-demand IT support for our
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-card">
            <i className="feature-box__icon icon-basic-world"></i>
            <div>
              <h1 className="flex-card__heading">Innovating & Improving</h1>
              <p className="flex-card__passage">
                We improvise ourselves by innovating and adopting the latest
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional">Industry Experts</h2>
      </div>
      <div className="row">
        <h3 className="services__bpm-heading">
          Innovating and Transforming Managed Services
        </h3>
        <p className="services__bpm-passage">
          We are the next-gen software company serving several industries with
          our frisky services. We approach all client issues with a strategized
          solution. We help clients capture the right digital opportunities with
          our Pega expertise.
        </p>
      </div>
      <div className="services__solution-cont u-margin-bottom-big">
        <div className="row u-center-text">
          <h2 className="services__solution-cont__heading">
            We are waiting to HELP you
          </h2>
          <p className="services__solution-cont__passage">
            Get in touch with us today and let’s start transforming your
            business from the ground up.
          </p>
          <button className="btn">Find Your solutions</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ManagedServices;
