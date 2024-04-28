// Importing dependencies
import { useGitHubProfile } from '../APIs/GitHub'; // Importing custom hook to fetch GitHub profile
import { Loading, Error } from '../Functional/Load'; // Importing Loading and Error components
import { Link } from 'react-router-dom'; // Importing Link component for React routing
import styles from './Profile.module.css'; // Importing CSS module for styling

// GitHub username for fetching profile. Add your username here if you would to auto update the portfolio
export const gitHubUserName = 'valenwhite';

// Displays the profile picture from GitHub and location
export const Profile = () => {

  // Fetching GitHub profile using custom hook
  const { loading, profile, error } = useGitHubProfile(gitHubUserName);

  // If the profile is still loading, display the loader
  if (loading) {
    return <Loading />
  }
  // If there was an error fetching the profile, display an error message
  if (error) {
    return <Error />
  }
  
  // If the profile was fetched successfully, display the profile
  return (  
    <div className={styles.profile}>
      <Link to="/home">
        <img src={profile.picture} alt="Home" />
      </Link>
      <h3>{profile.name}</h3>
      <h5>{profile.location}</h5>
      <div className={styles.onlineIndicator}>
        <div className={styles.circle}></div>
        <p>Available for Hire</p>
      </div>
    </div>
  );
};