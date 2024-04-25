import styles from './Layout.module.css';
import { SideBar } from '../SideBar/SideBar';
import { Home } from '../Home/Home';


export const Layout = () => {
    return (
        <div className="App">
            <div className={styles.menuContainer}>
                <SideBar />
            </div>
            <div className={styles.mainContainter}>
                <Home />
            </div>
        </div>
    )
}