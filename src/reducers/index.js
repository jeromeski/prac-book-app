import {combineReducers, createStore} from 'redux';
import { authReducer } from './auth';

const testReducer = () => 'Hello World';

export const store = createStore(combineReducers({
  test: testReducer,
  auth: authReducer
}))