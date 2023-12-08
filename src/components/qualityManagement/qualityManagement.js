import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

function QualityManagement() {
  return (
    <div className="services">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-very-huge">
        <h2 className="heading-professional">Quality Management</h2>
      </div>
      <div className="row u-center-text">
        <div className="row u-margin-bottom-big">
          <div className="col-1-of-3">
            <div className="services__options-box-qm ">
              <h3 className="services__options-box__heading">
                Enhance product quality with better test coverage
              </h3>
              <p className="paragraph">
                Automate and execute more tests with our test automation service
                resulting in increased test coverage and higher quality
                applications.
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="services__options-box-qm">
              <h3 className="services__options-box__heading">
                Faster time-to-market
              </h3>
              <p className="paragraph">
                Get accelerated results with constant execution of test cases
                thereby reducing overall testing time.
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="services__options-box-qm">
              <h3 className="services__options-box__heading">
                Automated testing
              </h3>
              <p className="paragraph">
                High risky and complex cases are automated to increase the time
                performance
              </p>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-bottom-medium u-margin-top-medium">
          <h2 className="heading-professional">Industry Experts</h2>
        </div>

        <h3 className="services__bpm-heading">
          Trusted Quality Assurance testing
        </h3>
        <p className="services__bpm-passage">
          Industry experts with strong technical expertise help organizations
          enjoy the benefits of a full QA department without the associated
          setup cost and hassle. With an emphasis on time-bound delivery and
          customized solutions, we excel at helping our partners manage the
          quality of their deliverables while keeping costs low.
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
export default QualityManagement;
