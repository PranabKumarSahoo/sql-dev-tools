import React from "react";
import './Contact.css'
export default function Contact() {
  return (
    <>
        <form className="contactform">
        <h2>Contact Us</h2>
          <ul>
            <li>
              <label for="name"><span>Name <span className="required-star">*</span></span></label>
              <input type="text" placeholder="Your name" id="name" name="user_name" />
            </li>
            <li>
              <label for="mail"><span>Email <span className="required-star">*</span></span></label>
              <input type="email" placeholder="Your Email" id="mail" name="user_email" />
            </li>
            <li>
              <label for="msg"><span>Message</span></label>
              <textarea rows="4" placeholder="Message that you want to write" cols="50"></textarea>
            </li>
            <li>
              <input type="submit" />
            </li>
          </ul>
        </form>
    </>
  );
}
