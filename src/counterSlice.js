import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

function increment(state, action) {
    state.value += 1;
}

function decrement(state, action) {
    state.value -= 1;
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment,
        decrement,
    },
});

export const { increment: incrementAction, decrement: decrementAction } = counterSlice.actions;

export default counterSlice.reducer;
