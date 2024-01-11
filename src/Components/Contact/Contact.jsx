import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container my-5 contact">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h1 className="mb-3">Contact Us</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label for="your-name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-name"
                    name="your-name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-surname" className="form-label">
                    Your Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-email"
                    name="your-email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="your-subject" className="form-label">
                    Your Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-subject"
                    name="your-subject"
                  />
                </div>
                <div className="col-12">
                  <label for="your-message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        data-res="<?php echo $sum; ?>"
                        type="submit"
                        className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
