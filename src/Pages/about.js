import React from 'react';
// import "./style.css";

const About = () => {
  return (
    <>

      <div className=''>

        <div className='container'>
          <div className='row' style={{ marginTop: "30px", }}>
            <h2 className='subtitle' style={{ textAlign: "center" }}><b>ABOUT US</b></h2>
            <div className='col-7 justify-text' id='aboutres'>
              <p>SILICON ( Society for Integrated Learning of Integrated circuit , Communication and Networking
                system ) is a technical club presented by the Department of Electronics and Communication
                Engineering. This club is open for all the students of any undergraduate or graduate program
                who are interested in the core Electronics and Communication. It is a student-led initiative to
                provide a platform to encourage the innovative and inquisitive young brains for problem solving
                at local as well as global level.<br></br>
                The faculty coordinator of this club is Mrs. Praveena Rajput ( Assistant Professor).<br></br>
                Mr. Ankit Kumar is the founder and head of SILICON Club.<br></br>
                We have Mr. Rishabh Upadhyay, Mr. Amrit Raj and Mr. Amit Mishra as our student mentors.</p>

            </div>
             <div className='col-5 about-bg'>
              <img src="/static_img/Si_logo.png" style={{ height: "65vh", width: "37vw" }} />
               {/* <div>
                <h2><b>Mission of SILICON</b></h2>
              
                <p>1. Involve : Involve students on campus interested in core technologies, including those with 
                  diverse backgrounds and different majors.
                </p>
                <p>2. Improve : Improve student’s knowledge about technical aspects of particular domains,
                   where new skills are gained through hands-on workshops, in-person trainings and live 
                  project activities.
                </p>
                <p>3. Innovate : Innovate great solutions for problems local as well as global with your new 
                  learnings and skill sets. Support your community by helping others to learn as well.
                </p>
               
              </div>  */}

            </div> 

          </div>
        </div>

        <div className='container '>

          <div className='row'>
            <div className='col-5 vision-bg' style={{ marginTop: "50px" }}> </div>

            <div className='col-7' >
              <h2 className='subtitle' style={{ textAlign: "center", marginTop: "40px" }}><b>VISION</b></h2>
              <p className='justify-text' id='aboutres1'>
                Our vision is to identify and promote university students interested in
                studying Electronics and Communication technologies and they want
                make their carriers in core technologies. This platform is created to
                help students in essential technologies including Electronics
                System Design, IoT, embedded systems, and Communication
                and Networking Systems Designing to bridge the gap between theoretical
                knowledge and real-life applications.
                The main and most promising goal of this technical
                community is imparting in depth knowledge to the students,
                facilitating technical activity, hand-on projects and cater them to the
                changing industrial demands, global and societal needs. Participating in technical events, students will have a
                significant impact on job opportunities. Students who are collecting
                technical skills and want to be part of real projects have an
                advantage in key areas of professional life.
              </p>
            </div>
          </div>
        </div>

      </div>


      <div className='valuebox-bg'>

        <div className="section position-relative---z-index-1 wf-section container-fluid" id='aboutvaluesres' >
          <div className="container" >
            <div className="text-center mg-bottom-48px">
              <div className="inner-container _510px center">
                <div className="subtitle mg-bottom-24px" style={{ fontSize: '60px' }}><b>Our values</b></div>
                <h2 className="display-3 mg-bottom-0">
                  The values that drive everything we do
                </h2>
              </div>
            </div>
            <div className="inner-container _500px-mbl center">
              <div className="grid-3-columns gap-row-32px mg-bottom-64px" id='aboutvalues'>

                <div className="card imgcard pd-44px---38px border-1px---neutral-300">
                  <div style={{ display: "flex" }}>
                    <img style={{ marginRight: "25px" }}
                      src="/static_img/coreicon1.svg"

                      className="max-w-48px-mbl mg-bottom-32px"
                    />
                    <h3 className="display-41 mg-bottom-8px">Involve</h3>
                  </div>
                  <p className="mg-bottom-0 justify-text">
                    Involve students of campus interested in core technologies, including those with
                    diverse backgrounds and different majors. And support the community by helping others to learn as well.
                  </p>
                </div>
                <div className="card imgcard pd-44px---38px border-1px---neutral-300">
                  <div style={{ display: "flex" }}>
                    <img style={{ marginRight: "25px" }}
                      src="/static_img/coreicon2.svg"

                      className="max-w-48px-mbl mg-bottom-32px"
                    />
                    <h3 className="display-41 mg-bottom-8px">Improve</h3>
                  </div>
                  <p className="mg-bottom-0 justify-text">
                    Improve student’s knowledge about technical aspects of particular domains,
                    where new skills are gained through hands-on workshops, in-person trainings and live
                    project activities.
                  </p>
                </div>
                <div className="card imgcard pd-44px---38px border-1px---neutral-300">
                  <div style={{ display: "flex" }}>
                    <img style={{ marginRight: "25px" }}
                      src="/static_img/coreicon3.svg"
                      className="max-w-48px-mbl mg-bottom-32px"
                    />
                    <h3 className="display-41 mg-bottom-8px">Innovate</h3>
                  </div>
                  <p className="mg-bottom-0 justify-text">
                    Innovate great solutions for problems local as well as global with your new
                    learnings and skill sets.
                  </p>
                </div>




              </div>

            </div>
          </div>
          <div className="bg-neutral-200 top-42 tablet-30" />
        </div>


        <div className="section bg-neutral-200 wf-section container-fluid" id='aboutvaluesres1'>
          <div className="container" id='featuresres'>
            <div className="inner-container _540px-mbl center">

              <h2 className='subtitle' style={{ textAlign: "center", fontFamily: "" }}><b>FEATURES</b></h2>
              <h4 className='display-3' style={{ textAlign: "center", marginBottom: "40px" }}> We are providing various required features to our members at our best standards. </h4>
              <div className="grid-2-columns " id='aboutvalues'>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/clubicon.png"
                    loading="eager"
                    alt=""
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Technical Clubs</h3>
                    <p className="mg-bottom-0">
                      Society has different technical clubs who are responsible for integrated knowledge enhancement of our members.
                    </p>
                  </div>
                </div>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/industry.png"
                    loading="eager"
                    alt="User Journey - Techcloud X Webflow Template"
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Industry-Based Knowledge</h3>
                    <p className="mg-bottom-0">
                      We are commited to provide best knowledge about tools and technologies at industry standards.
                    </p>
                  </div>
                </div>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/learning.png"
                    loading="eager"
                    alt=""
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Learning Contents</h3>
                    <p className="mg-bottom-0">
                      We have collection of technical contents in various different majors for enhancement of knowledge and skills of our members.
                    </p>
                  </div>
                </div>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/workshop.png"
                    loading="eager"
                    alt=""
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Workshops & Certification</h3>
                    <p className="mg-bottom-0">
                      Society provides several workshops and hands-on training sessions and also provides certificates regarding the same.
                    </p>
                  </div>
                </div>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/projectwork.png"
                    loading="eager"
                    alt=""
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Project Guidence & Support</h3>
                    <p className="mg-bottom-0">
                      Society supports various projects under the guidence of Department of Electronics and Communication Engineering.
                    </p>
                  </div>
                </div>

                <div className="card features-icon-left-card imgcard">
                  <img
                    src="/static_img/connect.png"
                    loading="eager"
                    alt=""
                  />
                  <div>
                    <h3 className="display-41 mg-bottom-12px">Networking Platform</h3>
                    <p className="mg-bottom-0">
                      We are providing seamless networking platform for members to connect with best industry professionals.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>


      <div className='container'>
        <h2 className='subtitle' style={{ textAlign: "center", fontFamily: "", margin: "20px", }}>Organisation Structure</h2>
        <div className='row'>
        <img src='./static_img/team-chart.png' />

        </div>
      </div>


      <div className="container">
        <div className='row' >
          <div className='col-7' id='targetres'>

            <h2 className='subtitle' style={{ textAlign: "center", marginTop: "30px", }}><b>OUR TARGETS</b></h2>
            <p className='justify-text' style={{ fontSize: "22px", marginTop: "30px", fontWeight: 420, color: "" }}>
              We help students to acquire and develop new skill-sets
              by conducting various lectures and workshops.
              We motivate and guide them to come up with
              innovative projects that tackle real-life problems, Which
              will cut the gap between theoretical and real-life
              applications.
              We provide resources and the technical support, how to
              realize and shape their projects.
              Through regular meetings and sessions we improve
              students’ technical and leadership skills in a peer-to-peer learning.
              Ensure that SILICON runs smoothly and efficiently on
              campus.
              Providing students with advance industry knowledge
              and hand-on skills.
              Working with maximum attention to the department to
              which they are assigned.
              Actively participating in SILICON on-campus and off-campus sessions and events.
              Demonstrating interest in resolving community issues and a willingness to learn new things.
            </p>

          </div>
          <div className='col-5' id='targetres' style={{ marginTop: "120px" }}>
            <img id='targetres1' className="aboutimg" src="/static_img/about-head1.png" style={{}} />


          </div>
        </div>
      </div>



    </>
  )
}

export default About 
