// ProductCard.js
import React from 'react';
import logo from '../assets/logo192.png';

const ProductCard = ({ product , addToCart }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={logo} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">${product.price}</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
		  <button onClick={() => addToCart(product)}>Add to Cart</button>
		  
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
