///components/ProductRow.js

import { useState, useEffect } from 'react';
import React from 'react';
import sampleImage from '../logo192.png';
import axios from 'axios';
import ShoppingCart from './ShoppingCart';
import ProductCard from './ProductCard';

const API_URL = 'https://s3y1m1jskh.execute-api.us-east-1.amazonaws.com/dev';

const productsData = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  { id: 3, name: 'Product 3', price: 12.49 },
];



const ProductRow = ({ addToCart }) => {

	const [ProductRow, setProductRow] = useState([]);

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to fetch data from.
    fetch('https://s3y1m1jskh.execute-api.us-east-1.amazonaws.com/dev')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
		console.log("API Call Success"); 
		
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
	   <ul>
        {data.map((product) => (
          <li key={product.id}>
            <div>
			<ProductCard key={product.id} product={product} addToCart={addToCart} />
           </div>
		   </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductRow;