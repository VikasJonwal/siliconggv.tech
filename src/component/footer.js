import React from "react";
import "./style.css";
import Map from "./map"
import { AiFillFacebook, AiOutlineTwitter, AiFillLinkedin, AiFillMail, AiFillInstagram } from "react-icons/ai"
import { Link } from "react-router-dom";




function Footer() {


  return (
    <footer style={{ paddingTop: 50, color: "#004d99", background: '#cccccc' }}>
      <div className="container-fluid">

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <address>
                <strong>SOCIETY FOR INTEGRATED LEARNING OF INTEGRATED CIRCUIT, COMMUNICATION AND NETWORKING SYSTEMS</strong>
                <br />
                INSTITUTE OF TECHNOLOGY<br />
                GURU GHASIDAS VISHWAVIDYALAYA
                <br />
                KONI, BILASPUR- 495009
                <br />
                <i></i>
              </address>


              <div className="social-icons">
                <ul className="social-network">
                  <li>
                    <a href="https://www.linkedin.com/company/silicon-ggv/"
                      data-placement="top"
                      title=""
                      data-original-title="Linkedin"
                      target={"_blank"}
                    >
                      <AiFillLinkedin style={{ height: 40, width: 40 }} />
                    </a>
                  </li>
                  <li>
                    <a href="www.facebook.com"
                      data-placement="top"
                      title=""
                      data-original-title="Facebook"
                      target={"_blank"}
                    >
                      <AiFillFacebook style={{ height: 40, width: 40 }} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/siliconggv"
                      data-placement="top"
                      title=""
                      data-original-title="Twitter"
                      target={"_blank"}
                    >
                      <AiOutlineTwitter style={{ height: 40, width: 40 }} />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/siliconggv/"
                      data-placement="top"
                      title=""
                      data-original-title="Instagram"
                      target={"_blank"}
                    >
                      <AiFillInstagram style={{ height: 40, width: 40 }} />
                    </a>
                  </li>
                  <li>
                    <a href="siliconggvofficial@gmail.com"
                      data-placement="top"
                      title=""
                      data-original-title="Mail Us"
                      target={"_blank"}
                    >
                      < AiFillMail style={{ height: 40, width: 40 }} />
                    </a>
                  </li>
                </ul>
              </div>


            </div>

            <div className="col-lg-2">
              <h6 className="">Quick Links</h6>
              <ul className="link-list" style={{ listStyle: "none" }}>
                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/clubs" style={{ textDecoration: "none" }}>
                    Clubs
                  </Link>
                </li>
                <li>
                  <Link to="/coreteam" style={{ textDecoration: "none" }}>
                    Core Team
                  </Link>
                </li>
                <li>
                  <Link to="/alumni" style={{ textDecoration: "none" }}>
                    Alumni & Mentors
                  </Link>
                </li>
                <li>
                  <Link to="/recrut" style={{ textDecoration: "none" }}>
                    Recruitment & Membership
                  </Link>
                </li>
                <li>
                  <Link to="/projects" style={{ textDecoration: "none" }}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6">
              <Map />
            </div>
          </div>
        </div>
        <div id="sub-footer" style={{ background: '#000000' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright">
                  <p>
                    <span style={{ fontSize: 15 }}>
                      ©SILICON  All right
                      reserved by {" "}
                    </span>
                    <a href="http://siliconggv.tech/"
                      delight="_blank"
                    >
                      <b> SILICON GGV</b>
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-lg-4">

                <p>
                  <span style={{ fontSize: 14 }}> Designed & Developed by : </span>
                  <a href="https://anurag-dubey.github.io/portfolio/" target={"_blank"} ><b>Silicon Team</b>   </a>
                    
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
