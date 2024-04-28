import { useEffect, useState } from 'react';

// const API_KEY = 'mKJpkBLe1kDR6YveYQ-pXLe0t6BR1eR3Soekzf5PZAg';

export function useUnSplashImage (searchValue) {
    const [unSplashLoading, setUnSplashLoading] = useState(true);
    const [unSplashIMG, setUnSplashIMG] = useState();
    const [unSplashError, setUnSplashError] = useState(null);

    useEffect(() => {
        getUnSplashImage(searchValue);
    }, [searchValue]);

        const data = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/TEIDE.JPG';

    async function getUnSplashImage(searchValue) {

//        const url = `ttps://api.unsplash.com/photos/random?client_id=${API_KEY}&query=${searchValue}&count=1`;

        try {
 
//            let res = await fetch(url);
//            let data = await res.json();


             if (data && data.length > 0) {
//                setUnSplashIMG(data[0].links.download);
                setUnSplashIMG(data);
            }

            setUnSplashLoading(false);

        } catch (error) {
            setUnSplashError(error);
            setUnSplashLoading(false);  
            console.log("ERROR STILL");
        }
    };

    return {
        unSplashLoading, 
        unSplashIMG,
        unSplashError,
    };
};