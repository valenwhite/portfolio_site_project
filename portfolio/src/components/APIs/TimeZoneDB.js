import { useState, useEffect } from "react";

export function useTimezone (coordinates) {
    const [loading, setLoading] = useState(true);
    const [timezone, setTimezone] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getTimezone() {
            const url = `http://api.timezonedb.com/v2.1/get-time-zone?key=IH29JWE0DM23&format=json&by=position&lat=${coordinates.lat}&lng=${coordinates.lng}`;

            try {
                let res = await fetch(url);
                let data = await res.json();

                setTimezone(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        getTimezone();

    }, [coordinates.lat, coordinates.lng]); // useEffect will run again if lat or lng changes

    return { loading, timezone, error };
};