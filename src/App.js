import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { auth, getUserFromDatabase } from "./Utils/firebase";
import Auth from "./component/Auth/Auth";


import TopNavbar from   "./component/Topnavbar";
import Footer from      "./component/footer";
import Home from        "./Pages/Home";
import About from       "./Pages/about";
import Clubs from       "./Pages/clubs";
import Contact from     "./Pages/contact";
import Coreteam from    "./Pages/coreteam";
import Membership from     "./Pages/recrut";
import Alumni from      "./Pages/alumni";
import Projects from    "./Pages/projects";

import Account from     "./component/Account/Account";
import Dashboard from   "./component/Dashboard/Dashboard";
import Myproject from   "./component/Myproject/Myproject";
import SecondNavbar from "./Pages/Home_folder/Navbar";
import MainLayout from "./Layout/MainLayout";
// import Learning from "./component/Learning/mylearning";
import Notify from "./component/Notifications/Notification";
import Todo from "./component/Todo/todo";



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  // const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchUserDetails = async (uid) => {
    const userDetails = await getUserFromDatabase(uid);
    setUserDetails(userDetails);
    // setIsDataLoaded(true);
  };
  console.log(userDetails);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((user) => {
      if (!user) {
        // setIsDataLoaded(true);
        setIsAuthenticated(false);
        return;
      }

      setIsAuthenticated(true);
      fetchUserDetails(user.uid);
    });

    return () => listener();
  }, []);

  return (
    <>
      <Router>
        <SecondNavbar auth={isAuthenticated} />
        <TopNavbar auth={isAuthenticated} />


        <Routes>

          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/" exact element={<Home />} />
          
          {!isAuthenticated && (
            <>
              <Route path="/login" element={<Auth />} />
              <Route path="/signup" element={<Auth signup />} />
            </>
          )}

          <Route
            path="/about"
            exact
            element={<About />}
          />
          <Route
            path="/clubs"
            exact
            element={<Clubs />}
          />
          <Route
            path="/projects"
            exact
            element={<Projects />}
          />
          <Route
            path="/contact"
            exact
            element={<Contact />}
          />
          <Route
            path="/coreteam"
            exact
            element={<Coreteam />}
          />
          <Route
            path="/recruit"
            exact
            element={<Membership />}
          />
          <Route
            path="/alumni"
            exact
            element={<Alumni />}
          />

          {isAuthenticated && (
            <>

              

              {/* <Route path="/dashboard/account" element={<Account userDetails={userDetails} auth={isAuthenticated} />} /> */}

              <Route path="/dashboard" element={<MainLayout userDetails={userDetails} auth={isAuthenticated} />}>
                <Route index element={<Dashboard />} />
                <Route path="account" element={<Account userDetails={userDetails} auth={isAuthenticated} />} />
                <Route path="myproject" element={<Myproject userDetails={userDetails} auth={isAuthenticated} />} />
                {/* <Route path="learning" element={<Learning />} /> */}
                <Route path="todo" element={<Todo userDetails={userDetails} auth={isAuthenticated} />} />
                <Route path="notification" element={<Notify userDetails={userDetails} auth={isAuthenticated} />} />
                <Route path="support" element={<Account userDetails={userDetails} auth={isAuthenticated} />} />
                <Route path="career" element={<Account userDetails={userDetails} auth={isAuthenticated} />} />
                <Route path="pratice" element={<Account userDetails={userDetails} auth={isAuthenticated} />} />


                {/* <Route path="Notification" element={< />} /> */}
                
              </Route>
              
            </>
          )}
        </Routes>

        <Footer />
      </Router>
    </>
    
  );
}

export default App;
