import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import GoogleMap from "./GoogleMap";
import Link from "next/link";

const MySwal = withReactContent(Swal);

const handleBlur = (perem) => {
  let msg = document.getElementById(perem).value;
  if (
    new RegExp(
      "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
    ).test(msg)
  ) {
    document.getElementById("btnSave").disabled = true;
    document.getElementById("isShowErrorMsg").style.display = "block";
  } else {
    document.getElementById("isShowErrorMsg").style.display = "none";
    document.getElementById("btnSave").disabled = false;
  }
};

const alertContent = () => {
  MySwal.fire({
    title: "Thank you!",
    text: "Your message has been received. We'll get back to you soon.",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const errorAlert = (msg = "Something went wrong. Please try again!") => {
  MySwal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    confirmButtonText: "OK",
  });
};

const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  phoneNumber: "",
  company: "",
  country: "",
  message: "",
  source: "SPM Contact Us",
  adminid: "6806315dab518273bbcf04c9",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://devqa-api.dealdox.io/api/autorize/webleadUser",
        contact
      );
      console.log("response", response);
      if ((response.data.status = "Success")) {
        setContact(INITIAL_STATE);
        alertContent();
      } else {
        errorAlert(
          error?.response?.data?.message || "Failed to submit the form!"
        );
      }
    } catch (error) {
      errorAlert(
        error?.response?.data?.message || "Failed to submit the form!"
      );
    }
  };

  return (
    <div className="contact-area ptb-100">
      <div className="container">
        <div className="section-title style-two">
          <span className="sub-title">Contact with us</span>
          <h2>
            Have Any Questions? <br /> Let&apos;s Talk!
          </h2>
        </div>

        <div className="row">
          {/* LEFT SIDE FORM */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* FIRST NAME */}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>First Name*</label>
                      <input
                        className="form-control"
                        id="first_name"
                        maxLength={40}
                        name="first_name"
                        value={contact.first_name}
                        type="text"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* LAST NAME */}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        id="last_name"
                        maxLength={80}
                        name="last_name"
                        value={contact.last_name}
                        type="text"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        className="form-control no-spin"
                        id="phone"
                        maxLength={40}
                        name="phoneNumber"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        onChange={handleChange}
                        value={contact.phoneNumber}
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        className="form-control"
                        id="email"
                        maxLength={80}
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                        value={contact.email}
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        className="form-control"
                        id="company"
                        maxLength={40}
                        name="company"
                        type="text"
                        required
                        onChange={handleChange}
                        value={contact.company}
                      />
                    </div>
                  </div>

                  {/* COUNTRY */}
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label>Country</label>
                      <input
                        className="form-control"
                        id="country"
                        maxLength={40}
                        name="country"
                        type="text"
                        onChange={handleChange}
                        value={contact.country}
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Message...</label>
                      <textarea
                        cols="30"
                        rows="6"
                        className="form-control"
                        id="00N2v00000XQu8f"
                        name="message"
                        type="text"
                        wrap="soft"
                        onChange={handleChange}
                        value={contact.message}
                      ></textarea>
                    </div>
                  </div>

                  {/* TERMS CHECKBOX */}
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkme"
                      />
                      <label className="form-check-label" htmlFor="checkme">
                        Accept{" "}
                        <Link href="/terms-conditions">Terms of Services</Link>{" "}
                        &<Link href="/privacy-policy"> Privacy Policy</Link>
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <label
                      className="col-lg-12 col-md-12 col-sm-12"
                      style={{ display: "none" }}
                      id="isShowErrorMsg"
                    >
                      Invalid form value
                    </label>

                    {/* SUBMIT BUTTON */}
                    <button
                      id="btnSave"
                      type="submit"
                      className="btn-style-one red-light-color"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="col-lg-6 col-md-12">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
