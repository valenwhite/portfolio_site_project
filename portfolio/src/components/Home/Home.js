import styles from './Home.module.css';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';


// Profile Pictre Import
import heroImage from '../../img/heroImage.png';

export const Home = () => {
    return (
        <div className='centerContainer'>
            <div>
                <div className={styles.homeContainer}>
                    <h1 className={styles.introText}><span className={styles.wave} role="img" aria-label="waving">👋</span> Hello, I'm Valen</h1>
                    <ReactTyped className={styles.typedText}
                    strings={[
                        "UX Designer.",
                        "Computer Science Student.",
                        "Aspiring Web Developer."
                        ]} 
                        typeSpeed={30}
                        backSpeed={20} 
                        backDelay={1000}
                    />

                    <div className={styles.buttonsOnHome}>
                        <Link to="/projects" >
                            <button className={`primary-button ${styles.heroButton}`}>My Projects</button>
                        </Link>
                        <Link to="/about">
                            <button className={`primary-button ${styles.heroButton}`}>About Me</button>
                        </Link>
                    </div>

                     <img src={heroImage} alt="portoflio owner" className={styles.heroImage}></img>

                </div>
            </div>    
        </div>
    );
};
