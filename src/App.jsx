import './App.css';
import Cart from './Cart.jsx';
import ProductList from './ProductList.jsx';
import { PRODUCTS } from './products';
import { useState } from 'react';

function App() {
	const [cart, setCart] = useState([]);
	return (
		<div>
			<h3 className='text-3xl text-center font-bold underline'>
				Welcome to the store
			</h3>
			<ProductList products={PRODUCTS} setCart={setCart} />
			<Cart setCart={setCart} cart={cart} />
		</div>
	);
}

export default App;
