import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_wIQVoVOuFRefoGUuTYwwH";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully.");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contact">
      <div className="text-center">
        <h1>Contact me</h1>
        <p>Reach out for further information or get in touch on Linkedin.</p>
  <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={register({
                    required: "Please enter your name",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              <div className="text-center">
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Please enter your email",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              <div className="text-center">
                <input
                  id="subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={register({
                    required: "Please enter the subject",
                  })}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  id="description"
                  type="text"
                  className="form-control"
                  placeholder="Feel free to write here or to add me on Linkedin..."
                  name="description"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
