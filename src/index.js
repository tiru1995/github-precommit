import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk  from 'redux-thunk';
import App from './App';
import rootreducer from './reducer';
import { fetchasync} from './actions';


const store = createStore(rootreducer, applyMiddleware(thunk));

store.dispatch(fetchasync());
// eslint-disable-next-line no-console
console.log(store.getState());

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
