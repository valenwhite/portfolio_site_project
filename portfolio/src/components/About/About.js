import { gitHubUserName  } from '../Profile/Profile';
import { useGitHubProfile } from '../APIs/GitHub';
import { useUnSplashImage } from '../APIs/UnSplash';

import styles from './About.module.css';

export const About = ()=> {

    const { loading, profile, error } = useGitHubProfile(gitHubUserName);
    const { unSplashLoading, unSplashIMG, unSplashError } = useUnSplashImage('Brisbane, AU'); 

    if (loading || unSplashLoading ) {
        return <l-tail-chase size="40" speed="1.75" color="white" ></l-tail-chase>;
    }

    if (error || unSplashError ) {
        return <h4>Error</h4>;
    }

    return (
        <div className='centerContainer'>
            <h1 className='header'>A little more about me</h1>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.box1}`}>
                    <img className={styles.gridImage} src={unSplashIMG} alt=''></img>
                </div>

                <div className={`${styles.gridItem} ${styles.box2}`}>
                    <h1>{profile.created_at.slice(0, 4)}</h1>
                    <h3>Joined GitHub</h3>
                </div>

                <div className={`${styles.gridItem} ${styles.box3}`}>
                    <h1>{profile.public_repos}</h1>
                    <h3>Public Projects</h3>
                </div>

                <div className={`${styles.gridItem} ${styles.box4}`}>
                    <p>As a junior web developer with a background in UX/UI and financial services, I bring a unique blend of design and analytical thinking to my work. Drawing from experience in the UX space, as well as my newfound coding skills, I'm excited about building creative and intuitive front end web solutions that have impact. <br/><br/>
                    Let's collaborate and create something special together.</p>
                    
                </div>

                <div className={styles.box5}>
                    <h2>{profile.location}</h2>
                    <h4>Where I live</h4>
                </div>

                <div className={styles.box6}>
                    <h2>🤞</h2>
                </div>
           
            </div>

            
        </div>
    )
}