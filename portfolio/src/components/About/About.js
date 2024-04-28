// Importing dependencies
import { gitHubUserName } from '../Profile/Profile'; // Importing GitHub username from Profile component
import { useGitHubProfile } from '../APIs/GitHub'; // Importing custom hook to fetch GitHub profile
import { useUnSplashImage } from '../APIs/UnSplash'; // Importing custom hook to fetch image from UnSplash
import { Loading, Error } from '../Functional/Load'; // Importing Loading and Error components
import styles from './About.module.css'; // Importing CSS module for styling

// Component for the About page
export const About = () => {
    // Fetching data from GitHub and UnSplash
    const { loading, profile, error } = useGitHubProfile(gitHubUserName);
    const { unSplashLoading, unSplashIMG, unSplashError } = useUnSplashImage('Brisbane, AU'); 

    // If loading, return the Loading component
    if (loading || unSplashLoading ) {
        return <Loading />;
    }

    // If there's an error, return the Error component
    if (error || unSplashError ) {
        return <Error />;
    }

    // If data is loaded and there's no error, return the About page
    return (
        <div className='centerContainer fadeUp'>
            <Header />
            <GridContainer profile={profile} unSplashIMG={unSplashIMG} />
        </div>
    );
};

const Header = () => (
    <h1 className='header'>./about me</h1>
);

const GridContainer = ({ profile, unSplashIMG }) => (
    <div className={styles.gridContainer}>
        <ImageBox image={unSplashIMG} />
        <InfoBox1 content={profile.created_at.slice(0, 4)} title="Joined GitHub" />
        <InfoBox2 content={profile.public_repos} title="Public Projects" />
        <TextBox />
        <LocationBox location={profile.location} />
    </div>
);

const ImageBox = ({ image }) => (
    <div className={`${styles.gridItem} ${styles.box1}`}>
        <img className={styles.gridImage} src={image} alt=''></img>
    </div>
);

const InfoBox1 = ({ content, title }) => (
    <div className={`${styles.gridItem} ${styles.box2}`}>
        <h1>{content}</h1>
        <h3>{title}</h3>
    </div>
);

const InfoBox2 = ({ content, title }) => (
    <div className={`${styles.gridItem} ${styles.box3}`}>
        <h1>{content}</h1>
        <h3>{title}</h3>
    </div>
);

const TextBox = () => (
    <div className={`${styles.gridItem} ${styles.box4}`}>
        <p>As a junior web developer with a background in UX/UI and financial services, I bring a unique blend of design and analytical thinking to my work. Drawing from experience in the UX space, as well as my newfound coding skills, I'm excited about building creative and intuitive front end web solutions that have impact. <br/><br/>
        Let's build something special, together.</p>
    </div>
);

const LocationBox = ({ location }) => (
    <div className={styles.box5}>
        <h2>{location}</h2>
        <h4>Where I live</h4>
    </div>
);