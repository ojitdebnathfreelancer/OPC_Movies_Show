import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setMovies(data))
    },[]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
            {
                movies.map(movie => <Movie key={movie.show.id} movie={movie}></Movie>)
            }
        </div>
    );
};

export default Movies;