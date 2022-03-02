import  {createStore } from 'redux';
import reducer from './Reducer';

// const createStore = Redux.createStore;

const store = createStore(reducer);


export default store;