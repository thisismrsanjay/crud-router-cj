import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, cols, showStock,showEdit,deleteProduct }) => (
    <div key={product.id} className={`card ${cols}`} styles="width: 18rem;">
        <img className="card-img-top" src={product.image} alt="Card  cap" />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price} </p>
            {
                showStock ?
                <p className="card-text">{product.quantity} in stock</p> : ''
            }
            {
                showEdit?
                <div>
                    <Link to={`/products/${product.id}/edit`} className="btn btn-info">Edit Product</Link>
                    <button onClick={deleteProduct}  className="btn btn-danger">Delete Product</button>
                </div>
                :<Link to={`/products/${product.id}`} className="btn btn-primary">View Product</Link>
            }
            
        </div>
    </div>
);

export default Product;