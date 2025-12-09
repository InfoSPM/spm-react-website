import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import GoogleMap from "./GoogleMap";
import Link from "next/link";
var NewComponent = React.createClass;

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

const submitContent = () => {
  if (
    document.getElementsByName("first_name")[0].value != "" &&
    document.getElementsByName("last_name")[0].value != "" &&
    document.getElementsByName("phone")[0].value != "" &&
    document.getElementsByName("email")[0].value != "" &&
    document.getElementsByName("00N2v00000XQu8f")[0].value != "" &&
    document.getElementsByName("company")[0].value != "" &&
    document.getElementsByName("country")[0].value != ""
  ) {
    alertContent();
  }
};

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <span className="sub-title">Contact with us</span>
            <h2>
              Have Any Questions? <br />
              Let&apos;s Talk!
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form
                  action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                  method="POST"
                >
                  <input
                    name="oid"
                    type="hidden"
                    defaultValue="00D2v000003PByK"
                  />
                  <input
                    name="retURL"
                    type="hidden"
                    defaultValue="https://www.spmglobaltech.com"
                  />
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          id="first_name"
                          maxLength={40}
                          name="first_name"
                          size={20}
                          type="text"
                          required
                          onBlur={(event) => handleBlur("first_name")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          id="last_name"
                          maxLength={80}
                          name="last_name"
                          size={20}
                          type="text"
                          required
                          onBlur={(event) => handleBlur("last_name")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          className="form-control"
                          id="phone"
                          maxLength={40}
                          name="phone"
                          size={20}
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          className="form-control"
                          id="email"
                          maxLength={80}
                          name="email"
                          size={20}
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Company</label>
                        <input
                          className="form-control"
                          id="company"
                          maxLength={40}
                          name="company"
                          size={20}
                          type="text"
                          required
                          onBlur={(event) => handleBlur("company")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>Country</label>
                        <input
                          className="form-control"
                          id="country"
                          maxLength={40}
                          name="country"
                          size={20}
                          type="text"
                          required
                          onBlur={(event) => handleBlur("country")}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message...</label>
                        <textarea
                          cols="30"
                          rows="6"
                          className="form-control"
                          id="00N2v00000XQu8f"
                          name="00N2v00000XQu8f"
                          type="text"
                          wrap="soft"
                          defaultValue={""}
                          required
                          onBlur={(event) => handleBlur("00N2v00000XQu8f")}
                        ></textarea>
                      </div>
                      <div style={{ display: "none" }}>
                        <label htmlFor="lead_source">lead Source</label>
                        <input
                          id="lead_source"
                          maxLength={40}
                          name="lead_source"
                          size={20}
                          type="text"
                          defaultValue="Website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          Accept{" "}
                          <Link href="/terms-conditions">
                            <a>Terms of Services </a>
                          </Link>{" "}
                              &
                          <Link href="/privacy-policy">
                            <a> Privacy Policy</a>
                          </Link>
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
                      <button
                        id="btnSave"
                        type="submit"
                        className="btn-style-one red-light-color"
                        onClick={() => submitContent()}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
