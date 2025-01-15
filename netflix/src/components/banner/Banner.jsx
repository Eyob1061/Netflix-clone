import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios'; 
import requests from '../../utils/requests'; 
import '../banner/Banner.css';
const Banner = () => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log('API Response:', request);
                const randomMovie = request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ];
                console.log('Selected Movie:', randomMovie);
                setMovie(randomMovie);
            } catch (error) {
                console.error('Failed to fetch Netflix Originals:', error);
            }
        })();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;

    }

    return (
        <div  
          className='banner'
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='banner-content'>
                <h1 className='banner-title'>{movie?.title || movie?.original_name}</h1>
                {/* <p>{movie?.overview}</p> */}
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-description'>{truncate(movie?.overview, 180)}</h1>
            </div>
            <div className='banner-fade-bottom'></div>
        </div>
    );
}

export default Banner;