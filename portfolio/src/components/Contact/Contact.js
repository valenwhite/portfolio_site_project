// Importing dependencies
import { useState } from 'react'; // Importing useState hook
import styles from './Contact.module.css'; // Importing styles css module for styling

// Image of map for demonstration purposes only
import map from './Map.png';

// Define the Contact component
export const Contact = () => {

    // Define default state variables for form fields and validation
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Define the form submission handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        const newErrors = validate(name, email, message); // Validate the form fields

        // If there are validation errors, update the errors state variable
        // Otherwise, log the form data and update the isSubmitted state variable
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(`Submitting Name ${name}, Email ${email}, Message ${message}`);
            setIsSubmitted(true);
        }
    }

    // Fucntion for form input validation
    // User will recieve the following errors if the form is filled with unacceptable data upon submission
    const validate = (name, email, message) => {
        const newErrors = {};
        if(!name) newErrors.name = 'Name cannot be blank!';
        if(!email) newErrors.email = 'Email cannot be blank!';
        else if(!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
        if(!message) newErrors.message = 'Message cannot be blank!';
        return newErrors;
    }

    // Function to render the form and include required validation 
    const renderForm = () => (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
            </label>
            <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
            </label>
            <label>
                Message
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                {errors.message && <p className={styles.error}>{errors.message}</p>}
            </label>
            <input type="submit" value="Submit" className='primary-button' />
        </form>
    );

    // Function to render the thank you message on the site after user submits
    const renderThankYouMessage = () => (
        <h1 className={styles.thankYou}>Thanks {name}!<br/> I'll be in touch soon 👍</h1>
    );

    // Renders the final component
    return (
        <div className='centerContainer fadeUp'>
            <h1 className='header'>./ contact me</h1>
            <div className={styles.formContainer}>
                <div className={styles.map}>
                    <img src={ map } alt='location of portfolio owner' />
                </div>
                {isSubmitted ? renderThankYouMessage() : renderForm()}
                <div className={styles.mapText}>
                    <h2>Anywhere!</h2>
                    <h4>Where I work</h4>
                </div>
            </div>
        </div>
    );
}