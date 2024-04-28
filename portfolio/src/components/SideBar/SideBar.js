// Importing dependecies and necessary libraries
import { NavLink, useLocation } from 'react-router-dom'; // Importing components for React routing
import { useState, useEffect } from 'react'; // Importing useState and useEffect hooks
import { Profile } from '../Profile/Profile'; // Importing the Profile component
import styles from './SideBar.module.css'; // Importing CSS module

// Importing icons from FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faDatabase, faFile, faBoxArchive} from '@fortawesome/free-solid-svg-icons';


// Sidebar navigation links
// Add items to the portfolio Nav by adding a new object to the navItems array below
export const navItems = [
  { icon: faAt, link: "/about", name: "About" },
  { icon: faDatabase, link: "/projects", name: "Projects" },
  { icon: faFile, link: "/resume", name: "Resume" },
  { icon: faBoxArchive, link: "/contact", name: "Contact" },
];

// NavItem component
// Generates the link for each of the menu items stored in the navItems array
export const NavItem = ({ icon, link, children }) => (
  <li>
    <FontAwesomeIcon className={styles.icon} icon={icon} />
    <NavLink className={styles.navItem} to={link}>{children}</NavLink>
  </li>
);

// SideBar component
// Displays the profile and generated navigation links created using the array and constructor above
export const SideBar = () => {

  // Getting the current location from the browser
  const location = useLocation();

  // State to handle the visibility of the sidebar
  const [isVisible, setIsVisible] = useState(false);

  // Effect to set the visibility of the sidebar after 9 seconds if the pathname is '/'
  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 9000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  // If the sidebar is not visible, don't render anything
  if (!isVisible) {
    return null;
  }

  // Render the sidebar with the profile and navigation links
  return (
    <nav className={styles.fadeIn}>
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
