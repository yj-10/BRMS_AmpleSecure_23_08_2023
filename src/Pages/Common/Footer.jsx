import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assests/Img/BRMS_LOGO-bg.png";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
} from "react-icons/gr";
import "./Footer.css";
import { useEffect } from "react";
function Footer() {
  return (
    <>
      <div className="Footer-Container">
        <Container>
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="Footer_content">
                <div className="div_footer_title">
                  <img src={Logo} className="img-fluid" alt="no-img"/>
                </div>
                <div className="ul">
                  <div className="li">
                      <p>
                      <AiOutlineHome className="h2" /> &nbsp; Headquarters
                      <br />
                      Sapna Sangeeta Road, 207, Capital Tower
                      <br /> Indore, Madhya Pradesh 452001, In Discuss
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={3} md={6}>
              <div className="Footer_content">
                <div className="div_footer_title mb-3">
                  <h1>Link</h1>
                </div>

                <div className="ul">
                  <div className="li">
                    <Link to="/">Home</Link>
                  </div>
                  <div className="li">
                    <Link to="/About">About</Link>
                  </div>
                  <div className="li">
                    <Link to="/Career">Career</Link>
                  </div>
                  <div className="li">
                    <Link to="/Services">Services</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} lg={3} md={6}>
              <div className="Footer_content">
                <div className="div_footer_title mb-3">
                  <h1>Contact</h1>
                </div>

                <div className="ul">
                  <div className="li">
                    <BsTelephone className="text-white" />
                    &nbsp; <Link to="#">9826722500</Link>
                  </div>
                  <div className="li ">
                    <AiOutlineMail className="text-white" /> &nbsp;
                    <Link to="#">amit.gahoi@amplesecure.in</Link>
                  </div>
                </div>

                <div className=" d-flex">
                  <ul className="div_ul_box">
                    <li>
                      <Link to="https://www.linkedin.com/company/amplesecure-india-services-pvt-ltd/people/">
                        <GrLinkedinOption className="text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.facebook.com/">
                        <GrFacebookOption className="text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                        <GrTwitter className="text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/accounts/login/">
                        <GrInstagram className="text-white" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className="Footer">
        <div className="Footer_box">
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <img src={Logo} alt="no-img" />{" "}
            </div>
            <p>
              <AiOutlineHome className="h2" /> &nbsp; Headquarters
              <br />
              Sapna Sangeeta Road, 207, Capital Tower
              <br /> Indore, Madhya Pradesh 452001, IN
            </p>
          </div>
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <h1>Link</h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Career">Career</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="Footer_content">
            <div className="div_footer_title mb-3">
              <h1>Contact</h1>
            </div>
            <ul>
              <li className="d-flex justify-content-start align-items-center">
                <BsTelephone className="text-white" />
                &nbsp; <Link to="#">9826722500</Link>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <AiOutlineMail className="text-white" /> &nbsp;
                <Link to="#">amit.gahoi@amplesecure.in</Link>
              </li>
            </ul>

            <div className="d-flex">
              <ul className="div_ul_box d-flex  ">
                <li>
                  <Link to="https://www.linkedin.com/company/amplesecure-india-services-pvt-ltd/people/">
                    <GrLinkedinOption className="text-white"/>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/">
                    <GrFacebookOption className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                    <GrTwitter className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/accounts/login/">
                    <GrInstagram className="text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>*/}
      {/* <div className="div_footer_box ">
        <Container fluid>
          <Row className="d-flex justify-content-center " style={{padding:"20px !important"}}>
            <Col sm={12} md={12} lg={6}>
              <div className="div_footer_copyright">
                <p>
                  © AmpleSecure {new Date().getFullYear()} – All Rights Reserved
                </p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} className="">
              <div className="div_footer_privacy_term ">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms and Conditions</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="Copyright-Container">
        <div className="Copyright-Row">
          <div className="Copyright-Col">
            <div className="Col">
              <Link>
                © AmpleSecure {new Date().getFullYear()} – All Rights Reserved
              </Link>
            </div>
          </div>
          <div className="Copyright-Col">
            <div className="Col-Sec">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
