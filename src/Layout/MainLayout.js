import React from 'react'
import './mainlayout.css'
import { Outlet } from 'react-router-dom'
import TopNavbar from '../component/Topnavbar'
import Sidebar from '../component/sidebar/sidebar'

const MainLayout = () => {
    return (
        <><div className='row' id='layoutres'>

            <div className="col-2" > <Sidebar /> </div>
           
            <div className="col-9">
                <Outlet />
            </div>

        </div>
        </>
    )
}

export default MainLayout