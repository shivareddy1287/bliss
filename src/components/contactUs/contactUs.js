import TopHeader from "../topHeader/topHeader";
import Footer from "../footer/footer";

// import landLine from "../../assets/landline.webp";
import worldwide from "../../assetsIconImgs/worldwide.png";
import email from "../../assetsIconImgs/email.png";
import telephone from "../../assetsIconImgs/telephone.png";

import contactUs from "../../assets/contactUsImg.jpg";
function ContactUs() {
  return (
    <div className="contact">
      <div className="contact__img-cont">
        <img src={contactUs} className="contact__img-cont__img" />
      </div>
      <TopHeader />
      <div className="contact__cont">
        {/* <div className="u-center-text u-margin-top-very-huge">
          <h2 className="heading-secondary2"></h2>
        </div> */}
        <div className="row u-margin-top-very-huge">
          <div className="col-1-of-2">
            <h1 className="contact__heading-primary">CONTACT DETAILS</h1>
            <h2 className="contact__heading-secondary u-margin-bottom-small">
              Contact us
            </h2>
            <p className="contact__paragraph u-margin-bottom-small">
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
            <div className="contact__address-box">
              {/* <i className="contact__address-box__icon icon-basic-world"></i> */}
              <img src={worldwide} className="contact__address-box__icon" />
              <div>
                <h3>Our Address:</h3>
                <p className="contact__address-box__passage">
                  Businesslike Software Solutions
                </p>
                <p className="contact__address-box__passage">
                  Block 2B, Vaishnavi Cynosure, Gachibowli, Hyderabad-500032,
                  Telangana, India.
                </p>
              </div>
            </div>
            <div className="contact__address-box">
              {/* <i className="contact__address-box__icon icon-basic-world"></i> */}
              <img src={email} className="contact__address-box__icon" />
              <div>
                <h3>Our Mailbox:</h3>
                <p className="contact__address-box__mail">
                  hello@businesseslikeglobal.com
                </p>
                <p className="contact__address-box__mail">
                  hr@businesseslikeglobal.com
                </p>
              </div>
            </div>
            <div className="contact__address-box">
              {/* <i className="contact__address-box__icon icon-basic-world"></i> */}
              <img src={telephone} className="contact__address-box__icon" />
              <div>
                <h3>Our Number:</h3>
                <p className="contact__address-box__passage">+91 40 79665661</p>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <form className="contact__form__box">
              <h1>Ready to Get Started?</h1>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="contact__form__box__input-flex">
                <div>
                  <label>First Name*</label>
                  <input placeholder="First Name" />
                </div>
                <div>
                  <label>Last Name*</label>
                  <input placeholder="Last Name" />
                </div>
              </div>
              <div className="contact__form__box__input-flex">
                <div>
                  <label>Email*</label>
                  <input placeholder="Email" />
                </div>
                <div>
                  <label>Phone No*</label>
                  <input placeholder="Phone No" />
                </div>
              </div>
              {/* <div>
              <label>Subject*</label>
              <input placeholder="Subject" />
            </div> */}
              <div>
                <label>Your message (optional)</label>

                <textarea placeholder="Your Message..." rows={5} cols={40} />
              </div>
              <button className=" contact__form__box__button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4812092246852!2d78.36437387503584!3d17.436667383458893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941e53f15555%3A0x517d58da5ebfe110!2sBusinessLike%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1689233377488!5m2!1sen!2sin"
        // width="600"
        // height="300"
        // style="border:0;"
        className="contact__map"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* <div className="row u-center-text u-margin-top-very-huge">
        <div className="u-center-text u-margin-top-very-huge">
          <h2 className="heading-secondary2">Get in touch</h2>
        </div>
        <p className="paragraph2">
          Get your project estimations for well-informed business decisions and
          top-notch digital outcomes.
        </p>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          <div className="contact__address-card">
            <h3 className="contact__address-card__heading">
              Trusted by companies worldwide. Join them now and grow your
              business.
            </h3>
            <hr />
            <p>BUSINESSLIKE SOFTWARE SOLUTIONS</p>
            <p>(OPC) PRIVATE LIMITED</p>
            <p> Vaishnavi's Cynosure,</p>
            <p> Telecom Nagar Extension</p>
            <p>Gachibowli - 500032, Hyderabad</p>
            <p>Telangana.</p>
            <p>M: hello@businesseslikeglobal.com </p>
            <p> Ph: +91 40 79665661</p>
          </div>
        </div>
        <div class="col-2-of-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4812092246852!2d78.36437387503584!3d17.436667383458893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb941e53f15555%3A0x517d58da5ebfe110!2sBusinessLike%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1689233377488!5m2!1sen!2sin"
            // width="600"
            // height="300"
            // style="border:0;"
            className="contact__map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="u-center-text u-margin-bottom-big u-margin-top-very-huge">
        <h2 className="heading-secondary2">
          Don’t be a stranger – Feel free to get in touch with experts
        </h2>
        <br />
        <p className="paragraph2">
          Drop us a line, and our rep will contact you within 30 minutes to
          arrange an initial discussion.
        </p>
      </div>
      <div className="row">
        <div className="contact__form">
          <form className="contact__form__box">
            <h3>Contact Us</h3>
            <div>
              <label>Full Name:</label>
              <input placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label>Email</label>
              <input placeholder="Enter Your Email" />
            </div>
            <div>
              <label>Phone No:</label>
              <input placeholder="Enter Your Phone No" />
            </div>
            <div>
              <label>Subject</label>
              <input placeholder="Subject" />
            </div>
            <div>
              <label>Your message (optional)</label>

              <textarea placeholder="Your Message" rows={5} cols={40} />
            </div>
            <button className="btn-gradient contact__form__box__button">
              Submit
            </button>
          </form>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default ContactUs;
