import { create } from 'zustand';
import { createSelectors } from './create-selectors';

const useCountStore = create((set) => ({
	count: 0,
	increment: () => set((state) => ({ count: state.count + 1 })),
	decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useStoreSelectors = createSelectors(useCountStore);
export default useCountStore;
