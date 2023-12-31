import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	count: number;
}

const initialState: CounterState = {
	count: 1,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 2;
		},
		decrement: (state) => {
			state.count -= 3;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
