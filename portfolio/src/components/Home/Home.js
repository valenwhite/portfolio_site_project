import styles from './Home.module.css';
import { ReactTyped } from 'react-typed';
// Profile Pictre Import
import ProfilePicture from '../../img/me.png';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <h1 className={styles.introText}> Hello, I'm Valen White</h1>
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
            <button className={`main-button ${styles.heroButton}`}>Let's Talk</button>
            <img src={ProfilePicture} alt="portoflio owner" className={styles.heroImage}></img>
        </div>
    );
};
