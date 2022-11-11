import React, { useState } from "react";
import "./contact.scss";
import TitleAndSubtitle from "../titleAndSubtitle/TitleAndSubtitle";
import contactUs from "../../image/svg/contactUs.svg";

export default function Contact() {
  const intialvalue = {
    name: "",
    email: "",
    phone: null,
    message: "",
  };
  const [values, setValues] = useState(intialvalue);
  const handleSubmit = (event) => {
    alert("Thanku for sending message " + values.name);
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((old) => {
      return { ...old, [name]: value };
    });
  };
  console.log(values.name);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contactUs} alt="contact us" />
      </div>
      <div className="right">
        <TitleAndSubtitle
          title="Contact Me"
          subtitle="Just write me a message"
        />
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone No.:
            <input
              type="tel"
              name="Phone"
              value={values.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message :
            <textarea
              type="text"
              name="message"
              value={values.message}
              onChange={handleChange}
              required
            />
          </label>
          <input type="submit" class="submitbtn" value="Send message" />
        </form>
      </div>
    </div>
  );
}
