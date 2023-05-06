import React, { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { Camera, LogOut, Edit2, Trash, GitHub, Paperclip } from "react-feather";
import { Link, Navigate } from "react-router-dom";

import InputControl from "../InputControl/InputControl";
import Spinner from "../Spinner/Spinner";
import ProjectForm from "../Myproject/ProjectForm/ProjectForm";
import ProjectModal from "../Myproject/ProjectModal/ProjectModal";
import { getAllProjects } from "../../Utils/firebase";

import {
    auth,
    uploadImage,
    updateUserDatabase,
    getAllProjectsForUser,
    deleteProject,
} from "../../Utils/firebase";

import styles from "./todo.module.css";

function Myproject(props) {
    const userDetails = props.userDetails;
    const isAuthenticated = props.auth;
    const imagePicker = useRef();

    const [progress, setProgress] = useState(0);
    const [profileImageUploadStarted, setProfileImageUploadStarted] =
        useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState(
        userDetails.profileImage ||
        "./DP.jpg"
    );
    const [userProfileValues, setUserProfileValues] = useState({
        name: userDetails.name || "",
        designation: userDetails.designation || "",
        github: userDetails.github || "",
        linkedin: userDetails.linkedin || "",
    });
    // const [showSaveDetailsButton, setShowSaveDetailsButton] = useState(false);
    // const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [projectDetails, setProjectDetails] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [projectsLoaded, setProjectsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);
    const [isEditProjectModal, setIsEditProjectModal] = useState(false);
    const [editProject, setEditProject] = useState({});


    const handleProjectCardClick = (project) => {
        setShowProjectModal(true);
        setProjectDetails(project);
    };
    const fetchAllProjects = async () => {
        const result = await getAllProjectsForUser(userDetails.uid);
        if (!result) {
            setProjectsLoaded(true);
            return;
        }
        setProjectsLoaded(true);

        let tempProjects = [];
        result.forEach((doc) => tempProjects.push({ ...doc.data(), pid: doc.id }));
        setProjects(tempProjects);
    };

    const handleEditClick = (project) => {
        setIsEditProjectModal(true);
        setEditProject(project);
        setShowProjectForm(true);
    };

    const handleDeletion = async (pid) => {
        await deleteProject(pid);
        fetchAllProjects();
    };

    useEffect(() => {
        fetchAllProjects();
    }, []);

    return isAuthenticated ? (
        <div className={styles.container}>
            {showProjectModal && (
                <ProjectModal
                    onClose={() => setShowProjectModal(false)}
                    details={projectDetails}
                />
            )}


            {showProjectForm && (
                <ProjectForm
                    onSubmission={fetchAllProjects}
                    onClose={() => setShowProjectForm(false)}
                    uid={userDetails.uid}
                    isEdit={isEditProjectModal}
                    default={editProject}
                />
            )}


            {/* <div className={styles.body}>
                <p className={styles.maintitle}>All Projects</p>
                <div className={styles.projectcards}>
                    {projectsLoaded ? (
                        projects.length > 0 ? (
                            projects.map((item) => (
                                <div
                                    className={styles.projectcard}
                                    key={item.pid}
                                    onClick={() => handleProjectCardClick(item)}
                                >
                                    <div className={styles.image}>
                                        <img
                                            src={
                                                item.thumbnail ||
                                                "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
                                            }
                                            alt="Project thumbnail"
                                        />
                                    </div>
                                    <p className={styles.title}>{item.title}</p>
                                </div>
                            ))
                        ) : (
                            <p>No projects found</p>
                        )
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div> */}

            <hr />

            <div className={styles.section}>
                <div className={styles.projectsHeader}>
                    <div className={styles.title}>To-Do List</div>
                    <button className={styles.button} onClick={() => setShowProjectForm(true)}>
                        Add New
                    </button>
                </div>

                <div className={styles.projects}>
                    {projectsLoaded ? (
                        projects.length > 0 ? (
                            projects.map((item, index) => (
                                <div className={styles.project} key={item.title + index}>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.title}>{item.overview}</p>

                                    <div className={styles.links}>
                                        <Edit2 onClick={() => handleEditClick(item)} />
                                        <Trash onClick={() => handleDeletion(item.pid)} />
                                        <Link target="_blank" to={`//${item.github}`}>
                                            <GitHub />
                                        </Link>
                                        {item.link ? (
                                            <Link target="_blank" to={`//${item.link}`}>
                                                <Paperclip />
                                            </Link>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No projects found</p>
                        )
                    ) : (
                        <Spinner />
                    )}
                </div>


            </div>
        </div>
    ) : (
        <Navigate to="/" />
    );
}

export default Myproject;
