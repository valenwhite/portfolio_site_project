import styles from './Home.module.css';
import { ReactTyped } from 'react-typed';

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.heroText}>
                <h1>Hey, I'm Valen</h1>
                <ReactTyped 
                    strings={[
                        "Computer Science Student",
                        "Aspiring Web Developer"
                        ]} 
                        typeSpeed={30}
                        backSpeed={50} 
                />
            </div>
        </div>
    );
};
