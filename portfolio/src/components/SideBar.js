import React from 'react';

//Router
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDatabase, faFile, faBoxArchive} from '@fortawesome/free-solid-svg-icons';

// CCS
import styles from './SideBar.module.css'; 
import { Link } from 'react-router-dom';


// Displays profile of the users portfolio
const Profile = () => (
  <div className={styles.profile}>
    <Link to="/home">
      <img className={styles.profilepicture} src="me.png" alt="Home" />
    </Link>
    <h4>Valen White</h4>
    <h6>Web Developer</h6>
  </div>
);


// Used to Generate each of the menu items from below
const NavItem = ({ icon, link, children }) => (
  <li className={styles.navItem}>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink to={link}>{children}</NavLink>
  </li>
);


// Collection of all the menu items listed in App
// To add a new page input the details using the NavItem format below
export const SideBar = () => (
  <Router>
    <nav className={styles.sidebar}>
      <Profile />
      <ul>
        <NavItem icon={faAt} link="/about">About</NavItem>
        <NavItem icon={faDatabase} link="/projects">Projects</NavItem>
        <NavItem icon={faFile} link="/resume">Resume</NavItem>
        <NavItem icon={faBoxArchive} link="/contact">Contact</NavItem>
      </ul>
    </nav>
  </Router>
);