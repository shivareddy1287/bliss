import { useState } from "react";

function CareerJobs() {
  const [viewDetailsText, setViewDetailsText] = useState("View Details");
  const [jobDetails, setJobDetails] = useState(false);

  const handleClickOnViewDetails = () => {
    if (viewDetailsText === "View Details") {
      setViewDetailsText("Hide Details");
      setJobDetails(true);
    } else {
      setViewDetailsText("View Details");
      setJobDetails(false);
    }
  };
  return (
    <>
      <div className="careers__jobs-card">
        <h3>Software Engineer (2-5 years)</h3>
        <p>
          We are looking for a PHP Developer, who needs an exciting new
          opportunity to showcase their skills and work with a dynamic team in
          Japan.
        </p>
        <p
          className="careers__jobs-card__view-details-text"
          onClick={handleClickOnViewDetails}
        >
          {viewDetailsText}
        </p>{" "}
        <br />
        {jobDetails && (
          <ul className="careers__jobs-card__points-cont">
            <li>
              Good understanding of PHP back-end development and frameworks
              (CodeIgniter or Laravel)
            </li>
            <li>
              Good understanding of front-end technologies, including HTML5,
              CSS3, JavaScript, jQuery
            </li>
            <li>Knowledge of object oriented PHP programming</li>
            <li>
              Understanding design principles behind a scalable application
            </li>
            <li>Familiarity with SQL/NoSQL databases</li>
            <li>
              User authentication and authorization between multiple systems,
              servers, and environments
            </li>
          </ul>
        )}
        <button className="btn">Apply Job</button>
      </div>
    </>
  );
}

export default CareerJobs;
