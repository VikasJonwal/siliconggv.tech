import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const ProjectCard = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">

                    <div className="card" id="card-cont" >
                        <img
                            className="card-img-top"
                            src={props.icon }
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title"><b>{props.heading}</b></h5>
                            <span className="card-text">{props.text}</span>
                            <br></br>
                            
                           <Link style={{float:"right", textDecoration:"none"}}>Read More --</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;






