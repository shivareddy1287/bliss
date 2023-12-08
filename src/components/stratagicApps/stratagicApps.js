import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

function StrategicApps() {
  return (
    <div className="services">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional u-margin-bottom-medium">
          Strategic Apps
        </h2>
        <br />
        <p className="services__paragraph">
          Best Strategic Application Across Divisions To Make Your Pega
          Implementation A Hassle-Free Experience.
        </p>
      </div>
      <div className="row u-center-text">
        <div className="row u-margin-bottom-big">
          <div className="col-1-of-4">
            <div className="services__options-box sa-card">
              <h3 className="services__options-box__heading">
                Financial Services
              </h3>
              <p className="paragraph">
                Pega CLM for FS Pega Collections Pega Customer Service for FS
                PegaCARD Customer Process Manager Default Management/Loan Loss
                Mitigation
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box sa-card">
              <h3 className="services__options-box__heading">
                Communications and Media
              </h3>
              <p className="paragraph">
                Pega Foundation for communications Pega configure price quote
                for communications pega customer Service for communications pega
                marketing for communications
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box sa-card">
              <h3 className="services__options-box__heading">Insurance</h3>
              <p className="paragraph">
                Pega Claims for Insurance Pega Customer Service for Insurance
                Pega Foundation for Insurance Pega Sales Automation for
                Insurance Pega Underwriting for Insurance
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box sa-card">
              <h3 className="services__options-box__heading">
                Cross Industry applications
              </h3>
              <p className="paragraph">
                Pega Customer Decision Hub Pega Customer Service Pega Business
                Intelligence Exchange Pega Call Pega Chat
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
export default StrategicApps;
