import React from "react";
import { signOut } from "firebase/auth";
import { LogOut } from "react-feather";
import { auth} from "../../Utils/firebase";
import { Link, useNavigate } from "react-router-dom";




const handleLogout = async () => {
    await signOut(auth);
};

const Dashboard = () => {
    return (
        <> 
            <h2> Welcom To Dashboard</h2>
        </>
    )
}
export default Dashboard;
