import React from 'react';
import { CDBSidebar, CDBIcon, CDBSidebarContent, CDBSidebarHeader, CDBSidebarFooter, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { LogOut } from "react-feather";
import { auth } from "../../Utils/firebase.js";


const Sidebar = () => {

    const handleLogout = async () => {
        await signOut(auth);
    };

    return (
        <div>
            <CDBSidebar textColor="#8c8c8c" backgroundColor=" #f2f2f2">
                <CDBSidebarHeader prefix={<i className="fa fa-bars"></i>}>
                    <Link to="/"><div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                            src={'./static_img/weblogo.png'}
                            alt="User"
                            style={{ width: '120px' }}
                        />
                        
                    </div></Link>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content" >
                    <CDBSidebarMenu>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="th-large">
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/learning" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-graduation-cap">
                                Learning
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/myproject" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-folder-open">
                                My Project
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/career" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-rocket">
                                Career
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/practice" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-code">
                                Practice
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/todo" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-check-square" >
                                To-Do List
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/account" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-user">
                                Account
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/notification" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-bell">
                                Notifications
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/get-component" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-microchip">
                               Get Component
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard/support" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="fa fa-handshake">
                                Support
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/about" activeClassName="activeClicked">
                            <CDBSidebarMenuItem  onClick={handleLogout}>
                                <i className="bx bx-power-off me-2" />
                                <span className="align-middle"><LogOut />Log Out</span>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        
                        
                        
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                <CDBSidebarFooter style={{ height:"40px" }}>
                    <div className="sidebar-btn-wrapper" >
                        
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    )
}

export default Sidebar;