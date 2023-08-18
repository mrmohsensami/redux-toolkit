import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/postsa');
    const data = await response.json();

    return data;
});

const initialState = {
    postList: [],
    fetchingPosts: false,
    errorMessage: null,
};

const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.fetchingPosts = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.postList = action.payload;
                state.fetchingPosts = false;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.fetchingPosts = false;
                state.errorMessage = action.payload.message;
            });

        // [fetchPosts.fulfilled]: (state, action) => {
        //     state.postList = action.payload;
        //     state.fetchingPosts = false;
        // },
        // [fetchPosts.pending]: (state) => {
        //     state.fetchingPosts = true;
        // },
        // [fetchPosts.rejected]: (state, action) => {
        //     state.fetchingPosts = false;
        //     state.errorMessage = action.payload.message;
        // },
    },
});

export default postSlice.reducer;
