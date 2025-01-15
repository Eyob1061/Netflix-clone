import React, { useState, useEffect } from 'react';
import '../rows/Row.css';
import axios from '../../utils/axios'; 
import movieTrailer from 'movie-trailer'; // Import the movieTrailer function
import YouTube from 'react-youtube'; // Import the YouTube component

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                console.log('Fetched movies:', request.data.results);
                setMovies(request.data.results);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            try {
                const url = await movieTrailer(movie?.title || movie?.name || movie?.original_name);
                console.log('Trailer URL:', url);
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            } catch (error) {
                console.error('Failed to fetch trailer:', error);
            }
        }
    };
    
    const opts = { 
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies?.map((movie, index) => {
                    const imageUrl = `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`;
                    console.log('Image URL:', imageUrl);
                    return (
                        <img
                            key={index}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={imageUrl}
                            alt={movie.name}
                            onClick={() => handleClick(movie)}
                        />
                    );
                })}
            </div>
            {trailerUrl && (
                <>
                    <YouTube videoId={trailerUrl} opts={opts} />
                    {console.log('YouTube Video ID:', trailerUrl)}
                </>
            )}
        </div>
    );
}

export default Row;