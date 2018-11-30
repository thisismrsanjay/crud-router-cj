import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = () => (
    <div className="jumbotron">
        <h1 className="display-3">CRUD STORE</h1>
        <p className="lead">Welcome to my React Store </p>
        <hr className="my-4" />
        <p>You Can Create Read Update Delelte Products</p>
        <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/products" role="button">View Products</Link>
        </p>
    </div>
);
export default LandingPage;