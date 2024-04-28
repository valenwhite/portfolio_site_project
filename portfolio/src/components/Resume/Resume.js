// Importing dependencies
import Job from './Job'; // Import the Job component from the Job.js file
import styles from './Resume.module.css'; // Import the CSS styles

import { Html5PlainWordmark, Css3PlainWordmark, JavascriptPlain, PythonPlainWordmark, CPlain } from 'devicons-react';


// Define an array of job objects. Each object contains a title, description, and date.
const jobs = [
    { title: 'StockCo', description: 'IT Delivery', date: 'Current' },
    { title: 'Freelance', description: 'Web Development', date: 'Current'},
    { title: 'StockCo', description: 'UX Design', date: '2021' },
    { title: 'Kiwibank', description: 'Digital Rep', date: '2018' }
]

// Define an array of school objects. Each object contains a name, year, and degree.
const schools = [
    { name: 'QUT', year: 'Current', degree: 'Computer Science' },
    { name: 'Massey University', year: '2015', degree: 'Bachelor of Business Studies' },
];

// Define the School component. It receives three props: name, year, and degree
const School = ({ name, year, degree }) => {
    return (
        <div className={styles.schoolContainer}>
            <div className={styles.schoolHeader}>
                <h1>{name}</h1>
                <h2 className={styles.smaller}>{year}</h2>
            </div>
            <h2 className={styles.smaller}>{degree}</h2>
        </div>
    );
};

// Resume component, renders work history and qualifications
export const Resume = () => {
    return (
        <div className='centerContainer fadeUp'>
            <h1 className={`header fadeUp ${styles.preventScroll}`}>./ resume</h1>
            <div className={styles.resumeContainer}>
                <div className={styles.box1}>
                  <div className={styles.leftContainer}>
                    {jobs.slice(0, 2).map((job, index) => (
                        <Job key={index} job={job} side='left' />
                    ))}
                  </div>
                  <div className={`${styles.stalk} ${styles.gradient}`}>
                  </div>
                 
                 <div className={styles.rightContainer}>
                    {jobs.slice(2).map((job, index) => (
                        <Job key={index + 2} job={job} side='right' />
                    ))}
                  </div>
                
                </div>
                <div className={styles.box2}>
                    <h1 className={styles.title}>Education</h1>
                    <div className={`${styles.seperator} ${styles.gradient}`}></div>
                    <div>
                        {schools.map((school, index) => (
                            <School key={index} name={school.name} year={school.year} degree={school.degree} />
                        ))}
                    </div>
                    <h1 className={`${styles.title} ${styles.buffer}`}>Programming Languages</h1>
                    <div className={`${styles.seperator} ${styles.gradient}`}></div>
                    <Html5PlainWordmark size={50}/>
                    <Css3PlainWordmark size={50}/>
                    <JavascriptPlain size={50}/>
                    <PythonPlainWordmark size={50}/>
                    <CPlain size={50}/>
                </div>
            </div>
        </div>
    )
}