import './App.css';
import Cart from './Cart.jsx';
import ProductList from './ProductList.jsx';
import { PRODUCTS } from './products';

function App() {
	return (
		<div>
			<h3 className='text-3xl text-center font-bold underline'>
				Welcome to the store
			</h3>
			<ProductList products={PRODUCTS} />
			<Cart />
		</div>
	);
}

export default App;
