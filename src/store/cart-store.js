import { create } from 'zustand';

// useCartStore is a custom hook so we "use" should start it. use "set" to manipulate our store
export const useCartStore = create((set) => ({
	cart: [],

	// addToCart is function, that takes in "product" as an argument. we then "set" the "state",by passing the cart into an object like it is at the top and spreading the state of the previous cart and add the new product
	addToCart: (product) =>
		set((state) => ({ cart: [...state.cart, product] })),
	removeFromCart: (productId) =>
		set((state) => ({
			cart: state.cart.filter((item) => item.id !== productId),
		})),
	clearCart: () => set({ cart: [] }),
}));
