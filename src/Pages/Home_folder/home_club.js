import { React, useState } from "react";
import { Link } from "react-router-dom";


function Homeclub() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (

        <div className="container" style={{ marginTop: "60px", marginBottom: "60px" }} >
            <h2 className="subtitle" style={{textAlign:"center", marginBottom: "60px"}}>CLUBS</h2>

            <div className="card">
                <div className="row" style={{ paddingTop: "10px", marginLeft: "3px" }}>
                    <div className="col-4">
                        <div className={toggleState === 1 ? "hometab1 active-tab1" : "hometab1"}
                            onClick={() => toggleTab(1)} style={{ fontSize: "24px", padding: "5px", fontWeight: "bold" }}><img src="/static_img/esd-logo.png" style={{ width: 45, height: 45 }} /> ESD Club</div>
                    </div>
                    <div className="col-4">
                        <div className={toggleState === 2 ? "hometab2 active-tab2" : "hometab2"}
                            onClick={() => toggleTab(2)} style={{ fontSize: "24px", padding: "5px", fontWeight: "bold" }}><img src="/static_img/iot-logo.png" style={{ width: 45, height: 45 }} /> IOT Club </div>
                    </div>
                    <div className="col-4">
                        <div className={toggleState === 3 ? "hometab3 active-tab3" : "hometab3"}
                            onClick={() => toggleTab(3)} style={{ fontSize: "24px", padding: "5px", fontWeight: "bold" }}> <img src="/static_img/cns-logo.png" style={{ width: 45, height: 45 }} /> CNS Club</div>
                    </div>
                </div>

                <div className={toggleState === 1 ? "clubcontent  active-content" : "content"}>
                    <div className="row " style={{ marginBottom: '20px' }}>
                        <div className="col-5">
                            
                            <p className="club-name" style={{ fontSize: "38px", marginTop: "0px", fontWeight: "bold", color: "red" }}> Electronics System Design Club </p>

                            <p className="justify-text" style={{ fontSize: "20px", fontWeight: "500" }}>
                                ESD club bringing together a set of keys of EDA topics,
                                enhance the core knowledge, methodologies and infrastructure required to
                                synthesis, verification, and manufacturing test of a functional & reliable integrated circuits.
                                It also includes PCB Designing where students learn design and simulate electrical systems,
                                from simple circuits to complex electronics.
                            </p>
                            <div className="imgcard" ><Link to="/clubs" style={{ textDecoration: "none", fontSize: "18px", marginTop: "20px", color: "blueviolet", float: "right", fontWeight:"bold" }}>Know More </Link> </div>
                        </div>
                        <div className="col-7" >
                            <div className="row" style={{ marginTop: "50px",padding:"25px" }}>
                                <div className="col-7" id="club-img1">
                                   
                                    <div className="imgcard row"><img src="/static_img/esd-image5.jpg" style={{ width: "80vw", height: "50vh",marginLeft: "120px", borderEndStartRadius: "30px 20px", borderStartEndRadius: "30px 20px", borderStartStartRadius: "30px 20px", borderEndEndRadius: "30px 20px" }} /></div>
                                </div>
                                {/* <div className="col-5" id="club-img0">
                                    <div className="imgcard row"><img src="/static_img/esd-img6.jpg" style={{ width: "20vw", height: "26vh", borderRadius: "8%" }} /></div>
                                    <div className="imgcard row" ><img src="/static_img/esd-img2.jpg" style={{ width: "20vw", height: "26vh", marginTop: "5vh", borderRadius: "8%" }} /></div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "clubcontent  active-content" : "content"}>
                    <div className="row " style={{ marginBottom: '20px' }}>
                        <div className="col-5">
                           
                            <p className="club-name" style={{ fontSize: "38px", marginTop: "0px", fontWeight: "bold", color: "deepskyblue" }}> Internet of Things Club</p>
                            <p className="justify-text" style={{ fontSize: "20px", fontWeight: "500" }}>
                                IoT club deals with the iot devices and embedded systems.
                                IoT is a network of physical objects, vehicles, 
                                buildings, and other items that have sensors, actuators,
                                and software built in to collect and exchange data.<br></br>
                                Where an embedded system is a combination of computer
                                hardware and software designed for a specific function.
                                Embedded systems may also function within a larger system.
                                The systems can be programmable or have a fixed functionality.
                            </p>
                            <div className="imgcard" ><Link to="/clubs" style={{ textDecoration: "none", fontSize: "18px", marginTop: "20px", color: "blueviolet", float: "right", fontWeight: "bold" }}>Know More </Link> </div>
                        </div>

                        <div className="col-7" id="club-img2">
                            <div className="  row">
                                <div className="imgcard col"><img src="/static_img/iot-img72.jpg" style={{ width: "40vw", height: "75vh", marginTop: "3vh",marginLeft:"4vw" }} /></div>
                                
                            </div>
                            

                        </div>
                    </div>
                </div>

                <div className={toggleState === 3 ? "clubcontent  active-content" : "content"}>
                    <div className="row " style={{ marginBottom: '20px' }}>
                        <div className="col-5">
                            
                            <p className="club-name" style={{ fontSize: "38px", marginTop: "0px", fontWeight: "bold", color: "#31E6B8" }}> Commmunication and Networking System Club</p>
                            <p className="justify-text" style={{ fontSize: "20px", fontWeight: "500" }}>
                                This club includes communication system and designing which is a
                                collection of individual transmission systems, telecommunication networks,
                                relay stations and terminal equipment usually capable of interconnection and interoperation.

                                Here we discuss and design Wireless Commmunication  Systems
                                (antenna, transmitter and receiver, signal-types, strength and degradation)
                                with the help of proper hardware and software tools.

                            </p>
                            <div className="imgcard" ><Link to="/clubs" style={{ textDecoration: "none", fontSize: "18px", marginTop: "20px", color: "blueviolet", float: "right", fontWeight: "bold" }}>Know More</Link> </div>
                        </div>

                        <div className="col-7" id="club-img3">
                            <div className="row">
                                <div className="imgcard col"><img src="/static_img/comm.jpg" style={{ width: "450px", height: "450px", marginTop: "5vh", marginLeft: "8vw" }} /></div>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>



    );
}

export default Homeclub;
