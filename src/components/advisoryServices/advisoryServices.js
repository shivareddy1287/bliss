import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

function advisoryServices() {
  return (
    <div className="services">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional u-margin-bottom-medium">
          Advisory Services
        </h2>
        <br />
        <p className="services__paragraph">
          Offering The Finest Consultation Guaranteeing A Smooth BPM Experience.
        </p>
      </div>
      <div className="row u-center-text">
        <div className="row u-margin-bottom-big">
          <div className="col-1-of-4">
            <div className="services__options-box as-card">
              <h3 className="services__options-box__heading">
                Center of excellence
              </h3>
              <p className="paragraph">
                Delivering proactive and personalized solutions in areas such as
                baseline processes, staffing models, and operating models.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box as-card">
              <h3 className="services__options-box__heading">
                Delivery Success
              </h3>
              <p className="paragraph">
                Delivering proactive and personalized solutions in areas such as
                baseline processes, staffing models, and operating models.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box as-card">
              <h3 className="services__options-box__heading">Insurance</h3>
              <p className="paragraph">
                Pega Claims for Insurance Pega Customer Service for Insurance
                Pega Foundation for Insurance Pega Sales Automation for
                Insurance Pega Underwriting for Insurance
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box as-card">
              <h3 className="services__options-box__heading">
                Performance review
              </h3>
              <p className="paragraph">
                Experts check-in on applications regularly to counter any hassle
                faced, ensuring you an efficient experience
              </p>
            </div>
          </div>
        </div>
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
export default advisoryServices;
