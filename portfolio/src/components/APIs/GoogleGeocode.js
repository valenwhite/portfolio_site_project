import { useState, useEffect } from "react";

export function useGoogleGeocoding (location) {
    const [loading, setLoading] = useState(true);
    const [coordinates, setCoordinates] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getGeocoding() {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${(location.location)}&key=AIzaSyDeY10IEkOSPhDLIf55unEDCOcAYyTsKVQ`;
   
            try {
                let res = await fetch(url);
                let data = await res.json();
                console.log(data);

                if (data.results && data.results.length > 0) {
                    setCoordinates(data.results[0].geometry.location);
                }

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        getGeocoding();
    }, [location.location]);

    return { 
        loading, 
        coordinates, 
        error 
    };
};
