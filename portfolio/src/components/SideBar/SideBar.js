import React from 'react';

//Router Components
import { NavLink, Link } from 'react-router-dom';

//Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDatabase, faFile, faBoxArchive} from '@fortawesome/free-solid-svg-icons';

// CCS Import
import styles from './SideBar.module.css'; 

// Profile Pictre Import
import ProfilePicture from '../../img/me.png';


// SIDERBAR PROFILE
// ----------------
// Displays profile picture and basic information of portfolio owner
// To change the picture, replace the ProfilePicture import with the new image saved to the img folder located in the src folder
const Profile = () => (
  <div className={styles.profile}>
    <Link to="/home">
      <img src={ProfilePicture} alt="Home" />
    </Link>
    <h3>Valen White</h3>
    <h5>Digital All Rounder</h5>
    <div className={styles.onlineIndicator}>
      <div className={styles.circle}></div>
      <p>Online Now</p>
    </div>
  </div>
);

// SIDEBAR NAVIGATION LINKS
// ------------------------
// Add items to the portfolio Nav by adding a new object to the navItems array below

const navItems = [
  { icon: faAt, link: "/about", name: "About" },
  { icon: faDatabase, link: "/projects", name: "Projects" },
  { icon: faFile, link: "/resume", name: "Resume" },
  { icon: faBoxArchive, link: "/contact", name: "Contact" },
];

// Generates the link for each of the menu items stored in the navItems array
const NavItem = ({ icon, link, children }) => (
  <li>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink exact className={styles.navItem} activeClassName={styles.activeNavItem} to={link}>{children}</NavLink>
  </li>
);

// Displays the profile and generated navigation links created using the array and constructor above
export const SideBar = () => (
  <nav>
    <Profile />
    <ul>
      {navItems.map((item) => (
        <NavItem 
          key={item.link} 
          icon={item.icon} 
          link={item.link}>{item.name}</NavItem>
      ))}
    </ul>
  </nav>
);