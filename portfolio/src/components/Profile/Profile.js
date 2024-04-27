import React from 'react';
import { useGitHubProfile } from '../APIs/GitHub';
import { Link } from 'react-router-dom';
// CSS Import
import styles from './Profile.module.css';

//Loader Import
import { tailChase } from 'ldrs';
tailChase.register();


// PROFILE SECTION
// ---------------
// Displays profile picture and basic information of portfolio owner
// To change the picture, replace the ProfilePicture import with the new image saved to the img folder located in the src folder

export const gitHubUserName = 'valenwhite';

export const Profile = () => {


  const { loading, profile, error } = useGitHubProfile(gitHubUserName);

  if (loading) {
    return <l-tail-chase size="40" speed="1.75" color="white" ></l-tail-chase>;
  }

  if (error) {
    return <h4>Error</h4>;
  }
  
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

export default Profile;