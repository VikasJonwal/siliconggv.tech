import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1cg9pe",
        "template_t7h8hwf",
        form.current,
        "okWr80IdqTe4hHqw-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      
      <div className="container" style={{ marginTop: 60, marginBottom: 100 }}>
        <div className="subtitle"> Contact Us</div>
        <div className="row">
          <div className="col-6">
            <form ref={form} onSubmit={sendEmail} className="container">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="email@address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
          <div className="col-6">
            {/* <Map/> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
