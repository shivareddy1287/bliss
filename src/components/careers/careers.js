import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

import AboutUsImg2 from "../../assets/02_About_Image_2.jpg";

import RewardIcon from "../../assetsIconImgs/002-reward.png";
import GrowingSalary from "../../assetsIconImgs/003-salary.png";
import OppurtunityIcon from "../../assetsIconImgs/opportunity.png";

import Cwc from "../../assetsIconImgs/colaborateWorkCulture.png";
import compensation from "../../assetsIconImgs/compensation.png";
import wlb from "../../assetsIconImgs/workLifeBalance.png";

import holiday from "../../assetsIconImgs/holiday.png";
import globalOppourtunities from "../../assetsIconImgs/global-oppourtunities.png";
import equalEmployment from "../../assetsIconImgs/equal-employment.png";

import learning from "../../assetsIconImgs/learning.png";
import innovation from "../../assetsIconImgs/innovation.png";
import woman from "../../assetsIconImgs/woman.png";

import carrerHead from "../../assets/career-head.jpg";

import CareerJobs from "./careerJobs/careerjobs";
import { useState } from "react";

function Careers() {
  const [searchInputActive, setSearchInputActive] = useState(false);

  const handleClickSearchIcon = () => {
    setSearchInputActive(!searchInputActive);
  };
  return (
    <div className="careers">
      <TopHeader />
      <div className="u-center-text u-margin-bottom-medium u-margin-top-big">
        <h2 className="heading-professional">Careers</h2>
        <br />
        <img src={carrerHead} />
      </div>

      <div className="row">
        <h2 className="careers__sub-heading">Careers</h2>
        <p className="paragraph">
          Our focus is on endless possibilities. We help coach and groom people
          to professionals. If you are a big thinker and you value excellence
          and growth, come join our team. Our open positions will be updated in
          this page and would want you by our side to develop products and
          services that are in huge demand for the growing needs of customers
          worldwide.
        </p>
        <div>
          <p className="careers__jobs-heading">Jobs in Hyderabad</p>
          <div className="careers__search-cont">
            <div
              className={`careers__search-cont__search ${
                searchInputActive ? "careers__search-cont__active" : ""
              }`}
            >
              <div
                className="careers__search-cont__icon"
                onClick={handleClickSearchIcon}
              ></div>
              <div className="careers__search-cont__input">
                <input type="search" placeholder="Search Jobs" id="#mySearch" />
              </div>
            </div>
          </div>
          <CareerJobs />
          <CareerJobs />
          <CareerJobs />
          <CareerJobs />
        </div>
      </div>

      {/* <div class="row">
        <div class="col-1-of-3">
          <div className="careers__card">
            
            <img className="careers__card__icon" src={OppurtunityIcon} />

            <div>
              <h3 className="careers__card__heading">Opportunity</h3>
              <p className="careers__card__passage">
                Our process places great responsibility on employees and
                encourages growth and career development.
              </p>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div className="careers__card">
            <img className="careers__card__icon" src={RewardIcon} />
            <div>
              <h3 className="careers__card__heading">Reward</h3>
              <p className="careers__card__passage">
                An opportunity for promotion within the organization,
                competitive salary and benefits, and an opportunity to make a
                difference.
              </p>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div className="careers__card">
            
            <img className="careers__card__icon" src={GrowingSalary} />
            <div>
              <h3 className="careers__card__heading">Growing Salary</h3>
              <p className="careers__card__passage">
                Who doesn’t want that! If you put in the time and hard work, you
                will be on your way to a stable career and great pay.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <p className="careers__passionate__description u-center-text">
          Our focus is on endless possibilities. We help coach and groom people
          to professionals. If you are a big thinker and you value excellence
          and growth, come join our team. Our open positions will be updated in
          this page and would want you by our side to develop products and
          services that are in huge demand for the growing needs of customers
          worldwide.
        </p>
      </div> */}
      {/* <div className="carrers__passionate">
        <div className="u-center-text u-margin-bottom-big u-margin-top-big">
          <h2 className="careers__passionate__heading">
            Are you passionate and enthusiastic about digital transformation
          </h2>
          <p className="careers__passionate__description">
            We have a place for you
          </p>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <img
              src={AboutUsImg2}
              alt="passionate img"
              className="careers__passionate__img"
            />
          </div>
          <div className="col-1-of-2">
            <h1 className="careers__passionate__sub-heading">
              Accelerate your career with us
            </h1>
            <p className="careers__passionate__sub-description">
              Collaboration is the key. We believe in working together with the
              people from across the business towards a higher success rate of
              achieving our goals. We encourage open- mindedness, effective
              communication, long term thinking and adaptability
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="careers__passionate__sub-heading">
              We have a place for you if you
            </h1>
            <p className="careers__passionate__sub-description">
              Strive for success.
            </p>
            <p className="careers__passionate__sub-description">
              Make positive impacts.
            </p>
            <p className="careers__passionate__sub-description">
              Align your “being” & “doing”.
            </p>
            <p className="careers__passionate__sub-description">
              Radiate versatility.
            </p>
            <p className="careers__passionate__sub-description">
              Thrive for excellence.
            </p>
          </div>
          <div className="col-1-of-2">
            <img
              src={AboutUsImg2}
              alt="passionate img"
              className="careers__passionate__img"
            />
          </div>
        </div>
      </div> */}
      {/* <div className="careers__benifits u-margin-bottom-big">
        <div className="u-center-text u-margin-bottom-big u-margin-top-big">
          <h2 className="careers__benifits__heading">
            We offer attractive benefits:
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={wlb} />

              <p className="careers__benifits__card__description">
                Work Life Balance
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={compensation} />
              <p className="careers__benifits__card__description">
                Comprehensive compensation
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={Cwc} />
              <p className="careers__benifits__card__description">
                Collaborative work culture
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={holiday} />
              <p className="careers__benifits__card__description">
                Competitive leave & holiday structure
              </p>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              <img className="careers__card__icon" src={equalEmployment} />
              <p className="careers__benifits__card__description">
                Equal employment opportunities
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              <img className="careers__card__icon" src={globalOppourtunities} />
              <p className="careers__benifits__card__description">
                Global work opportunities
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={innovation} />
              <p className="careers__benifits__card__description">
                Innovative Pega labs
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={woman} />

              <p className="careers__benifits__card__description">
                Encourage women empowerment
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="careers__benifits__card">
              
              <img className="careers__card__icon" src={learning} />

              <p className="careers__benifits__card__description">
                Enablement programs for continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Careers;
