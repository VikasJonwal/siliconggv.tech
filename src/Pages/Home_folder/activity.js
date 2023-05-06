import React from 'react'


const Homeactivity = () => {
    return (
        <>
            <section id="activity" className="activity-bg" style={{ marginTop: "20px", marginBottom: "0px" }}>
                <div className="container " id='activity_padding'>
                    <div className="subtitle" style={{ textAlign: "center" }}>Activities We Do </div>
                    <div className="row clubactivities" id='clubactivities' style={{ paddingTop: "25px", paddingBottom: "25px" }} >
                        <div className="col-4">
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col "><img className='imgf' src="/static_img/iot-img4.webp" style={{  }} /></div>
                                    <div className="col">
                                        <h4>Projects</h4><p> Society coducts projects under mentorship of Department of Electronics and Communication Engineering. </p></div>
                                </div>
                            </div>
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col"><img className='imgf' src="/static_img/13.jpg"  /></div>
                                    <div className="col">
                                        <h4>Lectures</h4><p> Each club conducts lectures around the year covering various topics related to industrial tools and technologies. </p></div>
                                </div>
                            </div>
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col"><img className='imgf' src="/static_img/Silicon_logo_2.0.png"  /></div>
                                    <div className="col">
                                        <h4>SILICON Week</h4><p> A tech week with different competitons, in which all schools participate to winning the coveted SILICON Badges and Prizes .</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 imgcard"><img className="akmiddle" src="/static_img/16.jpeg" style={{  }} /></div>

                        <div className="col-4">
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col"><img className='imgf' src="/static_img/14.jpg" /></div>
                                    <div className="col">
                                        <h4>Bootcamp</h4><p> BootCamps are days long session where we teach everything right from the scratch and discuss about new technologies. </p></div>
                                </div>
                            </div>
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col"><img className='imgf' src="/static_img/15.jpg"  /></div>
                                    <div className="col">
                                        <h4>Workshop</h4><p> Various workshops are organised over the year to give a hands-on experience in various fields. </p></div>
                                </div>
                            </div>
                            <div className="container-fluid" style={{ padding: "6px" }}>
                                <div className="row imgcard">
                                    <div className="col"><img  className='imgf' src="/static_img/equilibrio.jpg"  /></div>
                                    <div className="col">
                                        <h4>Equilibrio</h4><p> The club participates in the annual Technological and Entrepreneurial festival of IT GGV.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section> 
        </>

    );
};


export default Homeactivity