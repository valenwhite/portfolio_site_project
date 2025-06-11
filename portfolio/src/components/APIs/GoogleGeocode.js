// Import dependencies
import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React

// Custom hook called useGoogleGeocoding
// This hook accepts a single parameter, location, which is an object containing a location string. It will then return the precise long and lat of that location
// Used to convert the GitHub location string from a users profile to precise coordinates
export function useGoogleGeocoding (location) {
    
    // Define the default state variables
    const [loading, setLoading] = useState(true);
    const [coordinates, setCoordinates] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Async function to get geocoding data from Google Maps API
        async function getGeocoding() {

            // Construct the URL for the API request
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${(location.location)}&key=`;
   
            try {
                // Fetch the data from the API
                let res = await fetch(url);

                // Parse the JSON response
                let data = await res.json();
                console.log(data);

                // If there are any results, set the coordinates state variable
                if (data.results && data.results.length > 0) {
                    setCoordinates(data.results[0].geometry.location);
                }

                // Set the loading state variable to false 
                setLoading(false);

            } catch (error) {

                // If an error occurred, set the error state variable and set loading to false
                setError(error);
                setLoading(false);
            }
        }

        // Call the getGeocoding function
        getGeocoding();
    }, [location.location]);

    // Return the loading status, coordinates, and error as an object
    return { 
        loading, 
        coordinates, 
        error 
    };
};
