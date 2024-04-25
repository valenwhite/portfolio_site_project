import React from 'react';
import styles from './Home.module.css';
import '../../App.css'; // Import the style sheet from the parent folder


export const Home = () => {
    return (
        <div className={`main ${styles.help}`}>
            <h1 className={styles.title}>Hello World</h1>
        </div>
    );
};
