import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'

import App from './App';

const testReducer = () => 'Hello World';

const store = createStore(combineReducers({
  test: testReducer
}))

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
