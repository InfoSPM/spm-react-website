import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import GoogleMap from "./GoogleMap";
import Link from "next/link";
import gtstopimg from "@/public/images/gts_top_img.svg";
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
    title: "Thank you!",
    text: "Your message has been received. We'll get back to you soon.",
    icon: "success",
    timer: 30000,
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

// Form initial state
const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  phoneNumber: "",
  company: "",
  country: "",
  message: "",
  source: "SPM Get a Trial Service",
  adminid: "6806315dab518273bbcf04c9",
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
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title style-two">
            <span className="sub-title"></span>
            <h2></h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <label>First Name</label>
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
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Trail Service On</label>
                        <select
                          className="form-control"
                          id="00N2y000002FXr7"
                          name="00N2y000002FXr7"
                          title="Product Type"
                        >
                          <option>--None--</option>
                          <option value="IoT">IOT</option>
                          <option value="Big Data">Big Data</option>
                          <option value="Cyber Security & Cloud">
                            Cyber Security and Cloud
                          </option>
                          <option value="Blockchain">Blockchain</option>
                          <option value="Data Science">Data Science</option>
                          <option value="BMC">BMC</option>
                          <option value="Service Now">Service Now</option>
                          <option value="Salesforce">Salesforce</option>
                          <option value="AWS">AWS</option>
                          <option value="SAP">SAP</option>
                          <option value="Analytics">Analytics</option>
                          <option value="Mainframe">Mainframe</option>
                          <option value="ERP Application">
                            ERP Application
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Message</label>
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
                      {/* Adding checkbox button to the website  */}
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              class="form-check-input is-valid"
                              type="checkbox"
                              className="form-check-input"
                              id="checkme"
                              required
                            />

                            <label
                              className="form-check-label"
                              htmlFor="checkme"
                            >
                              I understand SPM's{" "}
                              <Link href="/privacy-policy">
                                <a>Privacy Policy</a>
                              </Link>{" "}
                              and{" "}
                              <Link href="/terms-conditions">
                                <a>Terms Of Use</a>
                              </Link>{" "}
                              govern the use of information about me{" "}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "none" }}>
                        <label for="Free_Trial_Service_Request_c">
                          Free Trial Service Requestc
                        </label>
                        <input
                          id="Free_Trial_Service_Request__c"
                          maxLength={40}
                          name="Free_Trial_Service_Request__c"
                          size={20}
                          type="text"
                          defaultValue="True"
                        />
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
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="goal-image style-two">
                <Image src={gtstopimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
