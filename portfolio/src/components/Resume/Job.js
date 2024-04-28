// Import the CSS module styles from the Resume.module.css file
import styles from './Resume.module.css';

// Job component. It receives two props: job (an object with job details) and side (a string indicating whether the job is on the left or right side). Depending on the value will determine the style applied
const Job = ({ job, side }) => {
    return (
        // Apply the jobContainer CSS class to the container div
        <div className={styles.jobContainer}>
            <div className={styles.header}>
                {side === 'right' ? (
                    <>
                        <p>{job.date}</p>
                        <h2 >{job.title}</h2>
                    </>
                ) : (
                    <>
                        <h2>{job.title}</h2>
                        <p>{job.date}</p>
                    </>
                )}
            </div>
            <p className={`${side === 'left' ? '' : styles.right} ${styles.gradient}`}>{job.description}</p>
        </div>
    );
};

export default Job;