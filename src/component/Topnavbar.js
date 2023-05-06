import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LogOut } from "react-feather";
import { auth } from "../Utils/firebase";


function TopNavbar(props) {

  const navigate = useNavigate();
  const isAuthenticated = props.auth ? true : false;


  const handleNextButtonClick = () => {
    if (isAuthenticated) navigate("/dashboard");
    else navigate("/login");
    console.log("handleNext button clicked")
  };


  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark "
        style={{ background:'#d9d9d9' }}  id="primnav"
      >
        <div className="container">
          <div ><a className="navbar-brand imgcard" href="/"><img src="/static_img/weblogo.png" style={{ height: 50, width: 190 }} alt="logo" /> </a> </div>

          <div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent ">
              <ul className="navbar-nav me-auto mb-0 mb-lg-0">

                <li className="nav-item active my-2 imgcard">
                  <Link className="nav-link " to="/">
                    <b className="nav-text">Home</b>
                  </Link>
                </li>
                <li className="nav-item my-2 imgcard">
                  <Link className="nav-link" to="/about">
                    <b className="nav-text">About Us</b>
                  </Link>
                </li>


                <div class="dropdown my-2 imgcard">
                  <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <b className="nav-text">Community</b>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link class="dropdown-item" to="/clubs"><b className="nav-text">Clubs</b></Link>
                    <Link class="dropdown-item" to="/coreteam"><b className="nav-text">Core Team</b></Link>
                    <Link class="dropdown-item" to="/alumni"><b className="nav-text">Mentors & Alumni</b></Link>
                    <Link class="dropdown-item" to="/recruit"><b className="nav-text">Membership</b></Link>
                  </div>
                </div>

                <li className="nav-item my-2 imgcard">
                  <Link className="nav-link" to="/dashboard/account">
                    <b className="nav-text">Notice-Board</b>
                  </Link>
                </li>

                <li className="nav-item my-2 imgcard">
                  <Link className="nav-link" to="/projects">
                    <b className="nav-text">Projects</b>
                  </Link>
                </li>

                <li className="nav-item my-2 imgcard">
                  <Link className="nav-link" to="/contact">
                    <b className="nav-text">Contact Us</b>
                  </Link>
                </li>
                {/* <li className="nav-item mx-1" onClick={handleNextButtonClick}></li> */}
                <div onClick={handleNextButtonClick}>
                  {isAuthenticated ?
                    // <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    //   <a className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    //    <div className="avatar avatar-online">
                    //      <img src="/static_img/ankitphoto.jpg" alt="" className="w-px-60 h-auto rounded-circle" />
                    //    </div> 
                    //   </a>
                    //   <ul className="dropdown-menu dropdown-menu-end">
                    //     <li>
                    //       <Link className="dropdown-item" to="/dashboard">
                    //         <div className="d-flex">
                    //           <div className="flex-shrink-0 me-3">
                    //             <div className="avatar avatar-online">
                    //               <img src="/static_img/ankitphoto.jpg" alt="" className="w-px-40 h-auto rounded-circle" />
                    //             </div>
                    //           </div>
                    //           <div className="flex-grow-1">
                    //             <span className="fw-semibold d-block">Ankit Kumar</span>
                    //             <small className="text-muted">Admin</small>
                    //           </div>
                    //         </div>
                    //       </Link>
                    //     </li>
                    //     <li>
                    //       <div className="dropdown-divider" />
                    //     </li>

                    //     <li>
                    //       <Link className="dropdown-item" to="/dashbord/account" >
                    //         <i className="bx bx-user me-2" />
                    //         <span className="align-middle">My Profile</span>
                    //       </Link>
                    //     </li>
                        
                    //     <li>
                    //       <Link className="dropdown-item" to="/getcomp" >
                    //         <i className="bx bx-user me-2" />
                    //         <span className="align-middle">Get Component</span>
                    //       </Link>
                    //     </li>
                    //     {/* <li>
                    //       <a className="dropdown-item" href="#">
                    //         <span className="d-flex align-items-center align-middle">
                    //           <i className="flex-shrink-0 bx bx-credit-card me-2" />
                    //           <span className="flex-grow-1 align-middle">Billing</span>
                    //           <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                    //         </span>
                    //       </a>
                    //     </li> */}
                    //     <li>
                    //       <div className="dropdown-divider" />
                    //     </li>
                    //     <li >
                    //       <Link className="dropdown-item" to="/about" onClick={handleLogout} >
                    //         <i className="bx bx-power-off me-2" />
                    //         <span className="align-middle"><LogOut />Log Out</span>
                    //       </Link>
                    //     </li>
                    //   </ul>
                    // </li>
                    // <div class="dropdown my-2">
                    //   <a class=" dropdown-toggle right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                    //     <div className="avatar avatar-online">
                    //       <img src="/static_img/ankitphoto.jpg" alt="" className="w-px-60 h-auto rounded-circle" />
                    //     </div>
                    //   </a>
                    //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    //     <Link class="dropdown-item" to="/dashboard/account">Profile</Link>
                    //     <Link className="dropdown-item" to="/about" onClick={handleLogout} >
                    //       <i className="bx bx-power-off me-2" />
                    //       <span className="align-middle"><LogOut />Log Out</span>
                    //     </Link>

                    //   </div>
                    // </div>
                     <div> Account</div>
                    : <Link className="nav-link"> <img src="/static_img/userid.png" style={{ height: 40, width: 40 }} /></Link>}
                </div>

                {/* <img src="userid.png" style={{ height: 40, width: 40 }} /> */}

              </ul>

            </div>
          </div>
        </div>

      </nav>
      <Outlet />
    </>
  );
};

export default TopNavbar;
