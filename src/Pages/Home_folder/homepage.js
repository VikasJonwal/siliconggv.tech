import React from "react";
import { Link } from "react-router-dom";

import Homeanimation from "./homevideo";
import Homeclub from "./home_club";
import Feature from "./feature";
import Homeactivity from "./activity";
import Handbook from "./handbook";

const Homepage = () => {
  return (
    <div>

      <section id="home-content" className="home-bg" >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-6" style={{ height: "680px" }}>
              <div className="home-title imgcard" style={{  }}>
                Society for Integrated Learning of ICs, Communication and Networking Systems
              </div>
              <div className="tagline" style={{  }} >
                <b> INVOLVE - IMPROVE - INNOVATE </b>
              </div>
              <div className="imgcard" style={{ marginTop: "20px", }} ><Link to="/about" style={{ textDecoration: "none", fontSize: "18px", color: "blueviolet", fontWeight: "bold" }}>Know More </Link> </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6" style={{ height: "680px" }} >

              {/* <Homeanimation/> */}

            </div>
          </div>
        </div>
      </section>

      <Homeclub />
      
      < Feature />

      
      
      <Homeactivity/>


      <section id="handbook" className="container" >

        <div className="container">
          <div className="row" style={{ marginBottom: "50px", marginLeft:"10vw"}}>
            <div className="col " >
              <Handbook />
            </div>
            <div className="col" >
              {/* <Handbook /> */}
            </div>
          </div>
        </div>

      </section>


    </div>
  );
};

export default Homepage


