import React, { useEffect, useState } from 'react';

const Movie = () => {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=097753c79d066c1968bd4fc0e883f")
            .then(res => res.json()) // Corrected line
            .then(json => setMovieList(json.results))
            .catch(error => console.error("Error fetching movies:", error));
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <div>
            {movieList.map((movie) => (
                <img style={{ width: "300px", height: "250px", margin: "10px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} key={movie.id} />
            ))}
        </div>
    );
};

export default Movie;
