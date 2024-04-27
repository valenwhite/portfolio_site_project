import { React } from 'react';

//Router Components
import { NavLink, useLocation } from 'react-router-dom';

// Import Profile
import { Profile } from '../Profile/Profile';

// CCS Import
import styles from './SideBar.module.css'; 

//Icon Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDatabase, faFile, faBoxArchive} from '@fortawesome/free-solid-svg-icons';


// SIDEBAR NAVIGATION LINKS
// ------------------------
// Add items to the portfolio Nav by adding a new object to the navItems array below

export const navItems = [
  { icon: faAt, link: "/about", name: "About" },
  { icon: faDatabase, link: "/projects", name: "Projects" },
  { icon: faFile, link: "/resume", name: "Resume" },
  { icon: faBoxArchive, link: "/contact", name: "Contact" },
];

// Generates the link for each of the menu items stored in the navItems array
export const NavItem = ({ icon, link, children }) => (
  <li>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink className={styles.navItem} to={link}>{children}</NavLink>
  </li>
);

// Displays the profile and generated navigation links created using the array and constructor above
const SideBar = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
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
};

export default SideBar;