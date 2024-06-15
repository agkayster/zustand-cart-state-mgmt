import { create } from 'zustand';
import { produce } from 'immer';

const initialState = {
	user: {
		id: 'user123',
		friends: ['jack', 'jill', 'akudo'],
		profile: {
			name: 'John Doe',
			email: 'johndoes@example.com',
			address: {
				street: '123 main street',
				city: 'anytown',
				zipCode: '12345',
			},
		},
	},
};

export const useUserStore = create((set) => ({
	...initialState,
	updateStreetAddress: (street) =>
		set(
			produce((state) => {
				state.user.profile.address.street = street;
			})
		),
}));
