// Importing dependecies and necessary libraries
import { useState } from 'react'; // Importing useState hook
import { useGitHubRepos } from '../APIs/GitHub'; // Importing the GitHub repository hook API
import { Loading, Error } from '../Functional/Load'; // Importing Loading and Error components
import { gitHubUserName } from '../Profile/Profile';
import styles from './Projects.module.css'; // Importing CSS module

// Importing icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';

// Imports images from the index file for each projct
// NOTE: This would be handled differently with a server backend
import { project1, project2, project3, project4, project5 } from './index';
const images = [project1, project2, project3, project4, project5];


// GridBuilder is a component that displays a grid of project cards
// It expects an array of projects and a callback function to handle card clicks
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

// Card is a component that displays a single project card
// It expects an image URL, a project name, an object of languages, and a click handler Further dev would aim to utilise GitHubs tag functionality to only allow projects that a use has tagged 'portfolio' to appear. Currently it displays all public repos
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

export const Projects = () => {
    
    // State variable for the currently selected project
    const [selectedProject, setSelectedProject] = useState(null);

    // State variable for the scroll position when a project is selected
    const [modalTop, setModalTop] = useState(0);

    // useGitHubRepos is a custom hook that fetches the user's GitHub repos
    const {loading, repos, error } = useGitHubRepos(gitHubUserName);

    // If the data is still loading, render the Loading component
    if (loading) {
        return <Loading />
    }

    // If there was an error loading the data, render the Error component
    if (error) {
        return <Error />
    }

    // This function is called when a project card is clicked
    // It sets the selected project, saves the scroll position, and prevents the page from scrolling
    // This is done to create a modal-like behavior
    const handleCardClick = (project) => {
        setSelectedProject(project);
        setModalTop(window.scrollY);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // This function is called when the modal close button is clicked
    // It clears the selected project and allows the page to scroll again
    // This is done to exit the modal-like behavior
    const handleClose = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    // Render the main component
    return (
        <div className='centerContainer fadeUp'>
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