import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {

    const { show } = movie;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='max-h-96 w-full' src={show?.image?.original} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{show?.name}</h2>
                <div className='flex flex-col'>
                    <span className='font-semibold'>Genres: {show?.genres}</span>
                    <span className='font-semibold'>Language: {show?.language}</span>
                </div>
                <p>{show?.summary.slice(0, 200)}<span className='font-bold text-blue-600'>...</span></p>
                <div className="card-actions justify-center">
                    <Link to={`/shows/${show?.id}`}>
                        <button className="btn btn-primary">Book Ticekt</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Movie;