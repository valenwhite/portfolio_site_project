import React from 'react';

//Router
import {NavLink } from 'react-router-dom';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDatabase, faFile, faBoxArchive} from '@fortawesome/free-solid-svg-icons';

// CCS
import styles from './SideBar.module.css'; 
import { Link } from 'react-router-dom';

// Profile Pictre Import
import ProfilePicture from '../../img/me.png';


// Displays profile picture and basic information of portfolio owner
// To chnage the picture, replace the ProfilePicture import with the new image saved to the img folder located in the src folder
const Profile = () => (
  <div className={styles.profile}>
    <Link to="/home">
      <img className={styles.profilePicture} src={ProfilePicture} alt="Home" />
    </Link>
    <h4>Valen White</h4>
    <h6>Web Developer</h6>
    <div className={styles.onlineIndicator}>
      <div className={styles.circle}></div> {/* Add this line */}
      <p>Online Now</p>
    </div>
  </div>
);


// Used to Generate each of the menu items from below
const NavItem = ({ icon, link, children }) => (
  <li className={styles.navItem}>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink to={link}>{children}</NavLink>
  </li>
);


// Collection of all the menu items/pages within the portfolio App
// To add a new page input the details using the NavItem format below
export const SideBar = () => (
    <nav>
      <Profile />
      <ul>
        <NavItem icon={faAt} link="/about">About</NavItem>
        <NavItem icon={faDatabase} link="/projects">Projects</NavItem>
        <NavItem icon={faFile} link="/resume">Resume</NavItem>
        <NavItem icon={faBoxArchive} link="/contact">Contact</NavItem>
      </ul>
    </nav>
);