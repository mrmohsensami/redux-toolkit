import { Provider } from 'react-redux';
import store from './store';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './counterSlice';
import { useEffect } from 'react';
import { fetchPosts } from './postSlice';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux Toolkit</h1>
                <hr />
                <Counter />
                <hr />
                <PostList />
            </div>
        </Provider>
    );
}

export default App;

function Counter() {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Value: {value}</h2>
            <button onClick={() => dispatch(incrementAction())}>Increment</button>
            <button onClick={() => dispatch(decrementAction())}>Decrement</button>
        </div>
    );
}

function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    console.log(posts.errorMessage);
    // const fetchingPosts = useSelector((state) => state.posts.fetchingPosts);
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    if (posts.fetchingPosts) {
        return <p>Loading ...</p>;
    }
    // work this later
    // if (posts.errorMessage) {
    //     return <p>Error ...</p>;
    // }
    return (
        <div>
            <h1>Posts</h1>
            {posts.postList.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    );
}
