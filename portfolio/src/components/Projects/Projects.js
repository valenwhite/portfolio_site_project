import styles from './Projects.module.css';
import photo from '../../img/test.png';

const GitHub = [
    { image: photo, title: 'Project 1', description: 'Description 1' },
    { image: photo, title: 'Project 2', description: 'Description 2' },
    { image: photo, title: 'Project 3', description: 'Description 3' },
    { image: photo, title: 'Project 4', description: 'Description 4' },
    { image: photo, title: 'Project 5', description: 'Description 5' },
    { image: photo, title: 'Project 6', description: 'Description 6' }
];

const Figma = [
    { image: photo, title: 'Project 1', description: 'Description 1' },
    { image: photo, title: 'Project 2', description: 'Description 2' },
    { image: photo, title: 'Project 3', description: 'Description 3' },
    { image: photo, title: 'Project 4', description: 'Description 4' },
    { image: photo, title: 'Project 5', description: 'Description 5' },
    { image: photo, title: 'Project 6', description: 'Description 6' }
];

const Card = ({ image, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt='project' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export const GridBuilder = ({site}) => {
    return (
        <div className={styles.gridContainer}>
            {site.map((item, index) => (
                <Card
                    key={index}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
};

export const Projects = () => {
    return (
        <div className='centerContainer'>
            <h2>GitHub Projects</h2>
            <GridBuilder site={GitHub} />
            <h2>Figma Projects</h2>
            <GridBuilder site={Figma} />
        </div>
    )
};