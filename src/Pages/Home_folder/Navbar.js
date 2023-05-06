import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, Outlet } from "react-router-dom";
import { signOut } from "firebase/auth";
import { LogOut } from "react-feather";
import { auth } from "../../Utils/firebase";



function SecondNavbar(props) {


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
        <Navbar bg="light" expand="lg" id='navboot'>
            <Container>
                <Navbar.Brand href="#home"><a className="navbar-brand imgcard" href="/"><img src="/static_img/weblogo.png" style={{ height: 50, width: 190 }} alt="logo" /> </a></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link " to="/">
                            <b className="nav-text">Home</b>
                        </Link>
                        <Link className="nav-link " to="/About">
                            <b className="nav-text">about</b>
                        </Link>
                        <NavDropdown title="Community" id="basic-nav-dropdown">
                            <Link className="nav-link " to="/clubs">
                                <b className="nav-text">Clubs</b>
                            </Link>
                            <Link className="nav-link " to="/coreteam">
                                <b className="nav-text">coreteam</b>
                            </Link>
                            <Link className="nav-link " to="/alumni">
                                <b className="nav-text">Alumini</b>
                            </Link>
                            <Link className="nav-link " to="/recruit">
                                <b className="nav-text">Membership</b>
                            </Link>
                        </NavDropdown>
                        <Link className="nav-link " to="/dashboard/account">
                                <b className="nav-text">Notice Board</b>
                            </Link>
                            <Link className="nav-link " to="/Projects">
                                <b className="nav-text">Projects</b>
                            </Link>
                            <Link className="nav-link " to="/Contact">
                                <b className="nav-text">Contact</b>
                            </Link>
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
                                : <Link className="nav-link"> <img src="/static_img/userid.png" style={{ height: 40, width: 40 }} />Account</Link>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SecondNavbar;