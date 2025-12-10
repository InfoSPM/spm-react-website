import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const GetStarted = () => {
  const [getStarted, setGetStarted] = React.useState();
  // React.useEffect(() => {
  //   const getGetStarted = async () => {
  //     const response = await axios.get(`${baseApiUrl}/api/let-s-get-started`);
  //     setGetStarted(response.data);
  //     // console.log(response.data)
  //   };
  //   getGetStarted();
  // }, []);

  return (
    <>
      {getStarted && (
        <div className="get-started-area">
          <div className="container">
            <div
              className="get-started-inner-area"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <h2>{getStarted?.data?.attributes?.title}</h2>
                </div>
                <div className="col-lg-5 col-md-12 text-end">
                  <Link href={getStarted?.data?.attributes?.btnLink}>
                    <a className="btn-style-one red-light-color">
                      {getStarted?.data?.attributes?.btnText}{" "}
                      <i className="bx bx-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStarted;
