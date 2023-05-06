
import { React, useState } from "react";
import ProjectCard from '../component/ProjectCards';


function Projects() {
        const [toggleState, setToggleState] = useState(1);

        const toggleTab = (index) => {
                setToggleState(index);
        };
        return (

                <div className="container" >
                        <h2 className='subtitle' style={{ textAlign: "center", margin: "40px" }}><b>Projects</b></h2>
                        <div className="row" style={{ margin: 20 }}>
                                <div className="col-9" style={{ marginLeft: "12vw", }} >
                                        <div className="row">
                                                <div className="col">
                                                        <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(1)} ><b>Projects'23</b></div>
                                                </div>
                                                <div className="col">
                                                        <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(2)}> <b>Projects'23</b> </div>
                                                </div>
                                                <div className="col">
                                                        <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(3)} > <b>Projects'23</b> </div>
                                                </div>
                                                <div className="col">
                                                        <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(4)} > <b>Projects'23</b> </div>
                                                </div>
                                                <div className="col">
                                                        <div className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(5)} > <b>Projects'23</b> </div>
                                                </div>
                                                <div className="col">
                                                        <div className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                                                                onClick={() => toggleTab(6)} > <b>Projects'23</b> </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="col">
                                <div style={{ marginBottom: '10px' }}>
                                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>
                                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>

                                        <div className={toggleState === 4 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className={toggleState === 5 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>
                                        <div className={toggleState === 6 ? "content  active-content" : "content"}>
                                                <div className='container' style={{ marginTop: "20px" }}>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>

                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="iot-img6.webp" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                        <div className='row' style={{ marginBottom: "40px" }}>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                                <div className='col imgcard'> <ProjectCard icon="xer4.jpg" heading="Project Title" text="SLICON Club is a student-led initiative aimed at establishing university-based communities for students interested in primarily three technologies:" />
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>

                                        
                                </div>
                        </div>
                </div>
        );

};

export default Projects;