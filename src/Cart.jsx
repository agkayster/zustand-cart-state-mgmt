const Cart = ({ cart, setCart }) => {
	return (
		<>
			<hr className='border-2 w-full' />
			<div className='flex flex-col items-center justify-center mt-10 gap-4'>
				<h2>Cart</h2>
				{cart.map((product) => (
					<div key={product.id} className='flex gap-4 items-center'>
						<span>{product.name}</span>
						<button
							className='border-2 border-cyan-600 rounded-md w-[5rem] hover:bg-cyan-600 hover:text-white'
							onClick={() =>
								setCart(
									cart.filter(
										(productItem) =>
											productItem.id !== product.id
									)
								)
							}>
							Remove
						</button>
					</div>
				))}
				{cart.length > 0 && (
					<button
						className='border-2 border-red-600 rounded-md w-[5rem] hover:bg-red-600 hover:text-white'
						onClick={() => setCart([])}>
						Clear Cart
					</button>
				)}
			</div>
		</>
	);
};

export default Cart;
