import axios from 'axios';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const redux = require('redux');
const createStore = redux.createStore;
const applyMiddlew = redux.applyMiddleware;
// const thunkMiddleware = require('redux-thunk').default

const initialState = {
  loading : false,
  users: [],
  error: ""
}

const FETCH_USERS_REQUESTS = "FETCH_USERS_REQUESTS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
  return{
    type: FETCH_USERS_REQUESTS,
  }
}

const fetchUsersSuccess = () => {
  return{
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = () => {
  return{
    type: FETCH_USERS_FAILURE ,
    payload: error
  }
}



const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_USERS_REQUESTS:
    return{
      ...state,
      loading: true

    }
    case FETCH_USERS_SUCCESS:
    return{
      ...state,
      loading: false,
      users: action.payload,
      error: ""
      
    }
    case FETCH_USERS_FAILURE:
    return{
      ...state,
      loading: false,
      users:[],
      error:action.payload
      
    }
    default: return state;
  }
}

const fetchUsers = ()=>{
  return function(dispatch){
    dispatch(fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")

    .then(response=>{
      const users = response.data.map(user => user.id);
      dispatch(fetchUsersSuccess(users));
    }
    ).catch(errors=>{
      const error = errors.description;
      dispatch(fetchUsersFailure(error));
    })}
}

const store=createStore(reducer,applyMiddlew([thunk]));
const unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
})
unsubscribe();


fetchUsers();