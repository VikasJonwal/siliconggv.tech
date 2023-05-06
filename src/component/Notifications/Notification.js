import React from 'react'


 const Notify = ()=>{

    // var app = angular.module("myApp", []);
    // app.controller("myController", function($scope) {
    //   $scope.tasks = [];
    //   // $scope.saved = localStorage.getItem("tasks");
    //   // $scope.tasks =
    //   //   localStorage.getItem("tasks") !== null
    //   //     ? JSON.parse($scope.saved)
    //   //     : [
    //   //         { task_name: "Learn AngularJS", status: false },
    //   //         { task_name: "Build an Angular app", status: false }
    //   //       ];
    //   // localStorage.setItem("tasks", JSON.stringify($scope.tasks));
    //   $scope.saveTask = function() {
    //     $scope.tasks.push({ task_name: $scope.yourTask, status: false });
    //     //   localStorage.setItem("tasks", JSON.stringify($scope.tasks));
    //   };
    //   $scope.getTask = function() {
    //     var oldTasks = $scope.tasks;
    //     $scope.tasks = [];
    //     angular.forEach(oldTasks, function(task) {
    //       if (!task.done) $scope.tasks.push(task);
    //     });
    //     localStorage.setItem("tasks", JSON.stringify($scope.tasks));
    //   };
    //   $scope.delete = function(i) {
    //     $scope.tasks.splice(i, 1);
    //   };
    //   $scope.finished = function(i) {
    //     $scope.tasks[i].status = true;
    //   }
    // });
    
      return (
  
        <div>
        <div className="container mt-5">
          <div className="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <div className="alert alert-info">
          <div className="container">
            <div className="alert-icon">
              <i className="material-icons">info_outline</i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i className="material-icons">clear</i></span>
            </button>
            <b>Workshkop :</b>  Title of Workshop
            <br />  description of workshop
            <br /> Timings : 
            <br /> Venue :
          </div>
        </div>
        <div className="alert alert-success">
          <div className="container">
            <div className="alert-icon">
              <i className="material-icons">check</i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i className="material-icons">clear</i></span>
            </button>
            <b>Result :</b> Yuhuuu! You've got your $11.99 album from The Weeknd
          </div>
        </div>
        <div className="alert alert-warning">
          <div className="container">
            <div className="alert-icon">
              <i className="material-icons">warning</i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i className="material-icons">clear</i></span>
            </button>
            <b>Alert :</b> Hey, it looks like you still have the "copyright ©  2015" in your footer. Please update it!
          </div>
        </div>
        <div className="alert alert-danger">
          <div className="container">
            <div className="alert-icon">
              <i className="material-icons">error_outline</i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i className="material-icons">clear</i></span>
            </button>
            <b>Announcement :</b> Damn man! You screwed up the server this time. You should find a good excuse for your Boss...
          </div>
        </div>
        <div className="alert alert-primary">
          <div className="container">
            <div className="alert-icon">
              <i className="material-icons">update</i>
            </div>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"><i className="material-icons">clear</i></span>
            </button>
            <b>Update :</b> Good evening! You should upgrade your data today.
          </div>
        </div>
      </div>
      );
    
  };

export default Notify;  