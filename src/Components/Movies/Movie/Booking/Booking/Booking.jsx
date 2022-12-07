import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../Modal/Modal';

const Booking = () => {

    const movie = useLoaderData();
    const [showModal, SetShowModal] = useState(true);

    const unsafeProps = {
        href: movie.officialSite,
        target: "_blank",
    };

    // console.log(movie);
    return (
        <div className="card md:card-side lg:card-side bg-base-100 shadow-xl md:my-5 lg:my-10">
            <img className='md:h-96 lg:h-96 md:w-1/3 lg:w-1/3 lg:rounded-tl-lg lg:rounded-bl-lg' src={movie?.image?.original} alt="movie-banner" />
            <div className="card-body md:w-2/3 lg:w-2/3">
                <h2 className="card-title">
                    <p>Movie Name: {movie?.name}</p>
                </h2>
                <p className='mt-2'>{movie?.summary}</p>
                <div className='lg:flex flex-col lg:flex-row md:justify-start lg:justify-between'>
                    <span className='font-semibold'>Rating: {movie?.rating?.average}/10</span>

                    <p className='font-semibold lg:ml-5'>Country: {movie ? movie?.webChannel?.country.name : 'Not Avialable'}</p>

                    <p className='font-semibold lg:ml-5'>Premiered: {movie?.premiered}</p>

                    <p className='font-semibold lg:ml-5'>Language: {movie?.language}</p>

                    <p className='font-semibold lg:ml-5 text-success'>
                        <a {...unsafeProps}>Official website</a>
                    </p>
                </div>
                <div className="card-actions justify-center mt-5">
                    <label onClick={()=> SetShowModal(true)} htmlFor="booking-modal" className="btn btn-primary">Get Ticket</label>
                </div>
            </div>
            {
                showModal &&
                <Modal movie={movie} SetShowModal={SetShowModal}></Modal>
            }
        </div>
    );
};

export default Booking;