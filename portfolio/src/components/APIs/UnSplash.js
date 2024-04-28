// Import useEffect and useState hooks from React
import { useEffect, useState } from 'react';

// Define the Unsplash API key (removed wehn correctly depoyed)
const API_KEY = 'mKJpkBLe1kDR6YveYQ-pXLe0t6BR1eR3Soekzf5PZAg';

// API that fetches an image from Unsplash based on a search value. The vlaue is the GitHub User Location
export function useUnSplashImage (searchValue) {
    // Define the default state variables for the loading status, the image URL, and any error
    const [unSplashLoading, setUnSplashLoading] = useState(true);
    const [unSplashIMG, setUnSplashIMG] = useState();
    const [unSplashError, setUnSplashError] = useState(null);

    // Use the useEffect hook to call getUnSplashImage whenever the searchValue changes
    useEffect(() => {
        getUnSplashImage(searchValue);
    }, [searchValue]);

    // Async function that fetches an image from Unsplash API ednpoint. Image will be ranodom based on the searchValue
    async function getUnSplashImage(searchValue) {

        // The URL for the Unsplash API
        const url = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&query=${searchValue}&count=1`;

        try {
            // Fetch the data from the Unsplash API
            let res = await fetch(url);
            // Parse the JSON response
            let data = await res.json();

            // If the data array has at least one item, set the image URL state variable to the download link of the first item
            if (data && data.length > 0) {
                setUnSplashIMG(data[0].links.download);
                
            }

            // Set the loading status to false
            setUnSplashLoading(false);

        } catch (error) {
            setUnSplashError(error);
            setUnSplashLoading(false);  
            console.log("ERROR STILL");
        }
    };

    // Return the loading status, the image URL, and the error as an object
    return {
        unSplashLoading, 
        unSplashIMG,
        unSplashError,
    };
};