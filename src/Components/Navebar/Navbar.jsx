import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.jpg';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const menuItmes = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>Movies</Link></li>
        <li><Link>TV Series</Link></li>
        <li><Link>About</Link></li>
    </>

    return (
        <div className="navbar flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                        <FaBars size={20}/>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {menuItmes}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-lg lg:text-2xl font-bold px-0">
                    <img className='h-8 lg:h-10 mr-2' src={logo} alt="" />
                    <span>Movies Show</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    {menuItmes}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;