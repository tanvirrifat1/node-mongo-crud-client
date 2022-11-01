import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>home</Link>
            <Link to='/users'>users</Link>
            <Link to='/update'>update</Link>
        </div>
    );
};

export default Header;