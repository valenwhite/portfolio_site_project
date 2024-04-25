import styles from './Layout.module.css';
import { SideBar } from '../SideBar/SideBar';
import { Home } from '../Home/Home';
import '../../App.css'; 


export const Layout = () => {
    return (
        <div className="App">
            <SideBar />
            <div className={styles.mainContainter}>
                <Home />
            </div>
        </div>
    )
}