// Importing dependencies
import { Link } from 'react-router-dom'; // Importing Link component for React routing
import { ReactTyped } from 'react-typed'; // Importing typing animation
import styles from './Home.module.css'; // Importing CSS module for styling

// Importing the hero image (memoji)
import { heroImage } from './index.js'; 

// Defining the strings to be used in the typing animation
const TYPED_STRINGS = [
    "UX Designer.",
    "Computer Science Student.",
    "Aspiring Web Developer."
];

// Reusable button component for navigation
export const HomeButton = ({ link, text, styles }) => (
    <Link to={link}>
        <button className={`primary-button ${styles.heroButton}`}>{text}</button>
    </Link>
);

// Defining the retrun for Home component
export const Home = () => {
    return (
        <div className='centerContainer'>
            <div>
                <div className={styles.homeContainer}>
                    <h1 className={styles.introText}><span className={styles.wave} role="img" aria-label="waving">👋</span> Hello, I'm Valen</h1>
                    <ReactTyped className={styles.typedText}
                        strings={TYPED_STRINGS} 
                        typeSpeed={30}
                        backSpeed={20} 
                        backDelay={1000}
                    />
                    <div className={styles.buttonsOnHome}>
                        <HomeButton link="/projects" text="My Projects" styles={styles} />
                        <HomeButton link="/about" text="About Me" styles={styles} />
                        <HomeButton link="/contact" text="Let's Connect" styles={styles} />
                    </div>
                    <img src={heroImage} alt="portfolio owner" className={styles.heroImage}></img>
                </div>
            </div>    
        </div>
    );
};