import { Provider } from 'react-redux';
import store from './store';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './counterSlice';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Redux Toolkit</h1>
                <Counter />
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
