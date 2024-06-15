import { FaShoppingCart } from 'react-icons/fa';

const ProductList = ({ products, setCart }) => {
	return (
		<div className='flex flex-col items-center justify-center gap-6 w-full'>
			{products?.map((product) => (
				<div
					key={product.id}
					className='w-[50%] flex flex-col items-center'>
					<h3 className='font-bold text-xl'>{product.name}</h3>
					<p className='font-normal text-base'>
						{product.description}
					</p>
					<button
						onClick={() => setCart((cart) => [...cart, product])}>
						<div
							className='flex items-center gap-2 border w-[7rem] text-sm bg-white text-black 
						rounded-md pl-2 hover:bg-slate-400 hover:text-white'>
							Add to Cart <FaShoppingCart />
						</div>
					</button>
				</div>
			))}
		</div>
	);
};

export default ProductList;
