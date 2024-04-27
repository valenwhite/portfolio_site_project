import styles from './Home.module.css';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';


// Profile Pictre Import
import ProfilePicture from '../../img/me.png';

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
                        <Link to="/contact">
                            <button className={`primary-button ${styles.heroButton}`}>Let's Chat</button>
                        </Link>
                        <Link to="/projects" >
                            <button className={`primary-button`}>Projects</button>
                        </Link>
                    </div>

                     <img src={ProfilePicture} alt="portoflio owner" className={styles.heroImage}></img>

                </div>
            </div>    
        </div>
    );
};
