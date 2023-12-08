import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

function PegaConsulting() {
  return (
    <div className="services">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional">Pega Consulting</h2>
      </div>
      <div className="row u-center-text">
        <p className="services__paragraph">
          A Pega trusted digital transformation expert providing IT solutions
          and services with a range of expertise that is on a global scale.
        </p>
        <div className="row u-margin-bottom-big">
          <div className="col-1-of-4">
            <div className="services__options-box">
              <h3 className="services__options-box__heading">
                RPA & Intelligent Automation
              </h3>
              <p className="paragraph">
                Guarantee the return on investments and reduced cost by
                achieving greater efficiency and minimizing human error.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box">
              <h3 className="services__options-box__heading">
                RPA & Intelligent Automation
              </h3>
              <p className="paragraph">
                Guarantee the return on investments and reduced cost by
                achieving greater efficiency and minimizing human error.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box">
              <h3 className="services__options-box__heading">
                RPA & Intelligent Automation
              </h3>
              <p className="paragraph">
                Guarantee the return on investments and reduced cost by
                achieving greater efficiency and minimizing human error.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="services__options-box">
              <h3 className="services__options-box__heading">
                RPA & Intelligent Automation
              </h3>
              <p className="paragraph">
                Guarantee the return on investments and reduced cost by
                achieving greater efficiency and minimizing human error.
              </p>
            </div>
          </div>
        </div>

        <h3 className="services__bpm-heading">BPM Frameworks Scalability</h3>
        <p className="services__bpm-passage">
          BPM itself a subset of infrastructure management, which maintains and
          optimizes an organization’s core operational components such as
          processes, equipment, and data.
        </p>
        <div class="row">
          <div class="col-1-of-4">
            <div className="services__bpm-card">
              <p className="paragraph">Growing enterprise architecture</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div className="services__bpm-card">
              <p className="paragraph">Growing enterprise architecture</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div className="services__bpm-card">
              <p className="paragraph">Growing enterprise architecture</p>
            </div>
          </div>
          <div class="col-1-of-4">
            <div className="services__bpm-card">
              <p className="paragraph">Growing enterprise architecture</p>
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
export default PegaConsulting;
