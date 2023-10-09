import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductRow from './components/ProductRow';
import Header from './components/Header';
import Footer from './components/Footer';
import MyCart from './components/MyCart';
import { useState } from 'react';



function App() {
	
	const [cart, setCart] = useState([]);
  
	// Function to add a product to the cart
	const addToCart = (product) => {
		console.log("Add Cart Function Call Success");
    setCart([...cart, product]);
  };
  
  const shouldDisplayProduct= true;
	
  return (
    <div className="App">
	<Header cart={cart} shouldDisplayProduct={shouldDisplayProduct}/>
	{shouldDisplayProduct
	?<ProductRow addToCart={addToCart} />
	:<MyCart cart={cart}/>
	}
	<Footer />
    </div>
  );
}

export default App;
