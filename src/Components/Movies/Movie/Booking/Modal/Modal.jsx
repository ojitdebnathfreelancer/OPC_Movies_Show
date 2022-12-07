import React from 'react';
import toast from 'react-hot-toast';

const Modal = ({ movie, SetShowModal }) => {

    const HandelSubmit = (e) =>{

        e.preventDefault();
        const form = e.target;
        const Movie = form.movieName.value;
        const schedule = form.schedule.value;
        const customer = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        
        const Consumer = {
            cinema: Movie,
            schedule,
            customer,
            number,
            email,
        };

        toast.success('Your booking confirm');
        SetShowModal(false);

        localStorage.setItem('consumer', JSON.stringify(Consumer));
    };
    // handel submit funtion 

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <form onSubmit={(e)=> HandelSubmit(e)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Movie Name</span>
                                </label>
                                <input type="text" readOnly name='movieName' defaultValue={movie.name} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Schedule</span>
                                </label>
                                <input type="text" readOnly name='schedule' defaultValue={`${movie.schedule.days[0]} ${movie.schedule.time}`} className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Number</span>
                                </label>
                                <input type="text" name='number' placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;