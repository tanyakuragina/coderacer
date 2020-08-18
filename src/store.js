import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducer from './redux/reducers';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err.message);
  }
};

const enhancers = compose(
  applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState,
  enhancers,
);

store.subscribe(throttle(() => {
  saveState({
    isAuthenticated: store.getState().isAuthenticated,
    game: store.getState().game,
  });
}, 1000));

export default store;
