import styles from './Home.module.css';
import { ReactTyped } from 'react-typed';

// Profile Pictre Import
import ProfilePicture from '../../img/me.png';

export const Home = () => {
    return (
        <div className='centerContainer'>
            <div>
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
            </div>
            <button className={`primary-button ${styles.heroButton}`}>Let's Talk</button>
            <img src={ProfilePicture} alt="portoflio owner" className={styles.heroImage}></img>
        </div>
    );
};
