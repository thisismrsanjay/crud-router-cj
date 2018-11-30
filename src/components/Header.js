import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Products CRUD</Link>

        <div >
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link" to="/products/create">Create a Product </Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link" to="/products">View Products </Link>
                </li>
            </ul>
        </div>
    </nav>
);
export default Header;