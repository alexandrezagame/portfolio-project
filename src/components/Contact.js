import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>Reach out for further information or get in touch on Linkedin.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="Email"
                email="email"
              />
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                subject="subject"
              />
              <div className="line"></div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Feel free to write here or to add me on Linkedin..."
                description="description"
              ></textarea>
              <div className="line"></div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
