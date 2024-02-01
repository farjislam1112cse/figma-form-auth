import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* logo */}
            <div>
                <img src="src/image/logo.ong" alt="logo" />
            </div>
            {/* menu */}
            <div>
                <NavLink to="/product">Product</NavLink>
                <NavLink to="/enterprice">Enterprice</NavLink>
                <NavLink to="/pricing">pricing</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/community">Communiity</NavLink>
                <NavLink to="/conatct sales">contact sales</NavLink>
                <NavLink to="/login">Log in</NavLink>
            </div>
            {/* button */}
            <button className='py-2 px-8 bg-gray-950 text-white font-bold'>Get started for free</button>
        </div>
    );
};

export default Navbar;