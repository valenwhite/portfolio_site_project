import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import photo from '../../img/test.png';
import { useGitHubRepos } from '../APIs/GitHub';

//Loader Import
import { tailChase } from 'ldrs';
tailChase.register();

export const gitHubUserName = 'valenwhite';

const Figma = [
    { image: photo, name: 'Project 1', description: 'Description 1' },
    { image: photo, name: 'Project 2', description: 'Description 2' },
    { image: photo, name: 'Project 3', description: 'Description 3' },
    { image: photo, name: 'Project 4', description: 'Description 4' },
    { image: photo, name: 'Project 5', description: 'Description 5' },
    { image: photo, name: 'Project 6', description: 'Description 6' }
];

const Card = ({ image, name, description, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={image} alt='project' />
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export const GridBuilder = ({projects, onCardClick}) => {
    return (
        <div className={styles.gridContainer}>
            {projects.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    name={item.name}
                    description={item.description}
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
            <h1 className='header'>./figma projects</h1>
            <GridBuilder projects={Figma} onCardClick={handleCardClick} />

            {selectedProject && (
                <div className={styles.modal} style={{ top: modalTop }}>
                    <div className={styles.modalContent}>
                        <h3>{selectedProject.name}</h3>
                        <img src={selectedProject.image} alt='project' />
                        <p>{selectedProject.description}</p>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
};