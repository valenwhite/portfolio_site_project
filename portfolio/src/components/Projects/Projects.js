import React, { useState } from 'react';
import styles from './Projects.module.css';
import photo from '../../img/test.png';

const GitHub = [
    { image: photo, title: 'Project 1', description: 'Description 1' },
    { image: photo, title: 'Project 2', description: 'Description 2' },
    { image: photo, title: 'Project 3', description: 'Description 3' },
    { image: photo, title: 'Project 4', description: 'Description 4' },
    { image: photo, title: 'Project 5', description: 'Description 5' },
    { image: photo, title: 'Project 6', description: 'Description 6' }
];

const Figma = [
    { image: photo, title: 'Project 1', description: 'Description 1' },
    { image: photo, title: 'Project 2', description: 'Description 2' },
    { image: photo, title: 'Project 3', description: 'Description 3' },
    { image: photo, title: 'Project 4', description: 'Description 4' },
    { image: photo, title: 'Project 5', description: 'Description 5' },
    { image: photo, title: 'Project 6', description: 'Description 6' }
];

const Card = ({ image, title, description, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={image} alt='project' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export const GridBuilder = ({site, onCardClick}) => {
    return (
        <div className={styles.gridContainer}>
            {site.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    title={item.title}
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
            <h2>GitHub Projects</h2>
            <GridBuilder site={GitHub} onCardClick={handleCardClick} />
            <h2>Figma Projects</h2>
            <GridBuilder site={Figma} onCardClick={handleCardClick} />

            {selectedProject && (
                <div className={styles.modal} style={{ top: modalTop }}>
                    <div className={styles.modalContent}>
                        <h3>{selectedProject.title}</h3>
                        <img src={selectedProject.image} alt='project' />
                        <p>{selectedProject.description}</p>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
};