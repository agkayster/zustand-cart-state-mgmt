import './App.css';
import Cart from './Cart.jsx';
import ProductList from './ProductList.jsx';
import { PRODUCTS } from './products';
import { useStoreSelectors } from './store/count-store.js';

function App() {
	const count = useStoreSelectors.use.count();
	const increment = useStoreSelectors.use.increment();
	const decrement = useStoreSelectors.use.decrement();
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
