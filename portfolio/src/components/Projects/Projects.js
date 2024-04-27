import React, { useState } from 'react';
import styles from './Projects.module.css';
import { useGitHubRepos } from '../APIs/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';

import project1 from '../../img/projects/project1.png';
import project2 from '../../img/projects/project2.png';
import project3 from '../../img/projects/project3.png';
import project4 from '../../img/projects/project4.png';
import project5 from '../../img/projects/project5.png';

//Loader Import
import { tailChase } from 'ldrs';
tailChase.register();

export const gitHubUserName = 'valenwhite';



const images = [project1, project2, project3, project4, project5];

const Card = ({ image, name, languages, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={image} alt='project' />
            <h3>{name}</h3>
            <div className={styles.languages}>
                {Object.keys(languages).map((language, index) => (
                    <h6 key={index} className={styles.language}>
                        {language}
                    </h6>
                ))}
            </div>
        </div>
    )
}

export const GridBuilder = ({projects, onCardClick}) => {
    return (
        <div className={styles.gridContainer}>
            {[...projects].reverse().map((item, index) => (
                <Card
                    key={index}
                    image={images[index]}
                    name={item.description}
                    languages={item.languages}
                    onClick={() => onCardClick(item)}
                />
            ))}
        </div>
    )
};

export const Projects = () => {
    
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalTop, setModalTop] = useState(0);

    const {loading, repos, error } = useGitHubRepos(gitHubUserName);

    if (loading) {
        return <l-tail-chase size="40" speed="1.75" color="white" ></l-tail-chase>;
    }

    if (error) {
        return <h4>Error</h4>;
    }

    console.log(repos);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setModalTop(window.scrollY);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const handleClose = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    return (
        <div className='centerContainer'>
            <h1 className='header'>./github projects</h1>
            <GridBuilder projects={repos} onCardClick={handleCardClick} />

            {selectedProject && (
                <div className={styles.modal} style={{ top: modalTop }}>
                    <div className={styles.modalContent}>
                        <img src={project1} alt='project' />
                        <div className={styles.popupDescription}>
                            <div className={styles.header}>
                                <button onClick={handleClose}><FontAwesomeIcon icon={faX} /></button>
                            </div>
                            <h3>{selectedProject.description}</h3>
                            <div className={styles.languages}>
                                {Object.keys(selectedProject.languages).map((language, index) => (
                                    <h6 key={index} className={styles.language}>
                                        {language}
                                    </h6>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};