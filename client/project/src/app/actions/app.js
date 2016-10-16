import superagent from 'superagent';
import { createStore, applyMiddleware } from 'redux';
import app from '../reducers/app';
import thunk from 'redux-thunk';
 
const store = createStore(
  app,
  applyMiddleware(thunk)
);


export function select(n) {
  return {
    type: 'select',
    index: n
  }
}

let increment = function(data) {
  return {
    type: 'getUserInfo',
    userInfo: data
  }
}


export function getUserInfo() {
  return function (dispatch) {
    return fetchUserInfo()
    .then(response => {
        console.log(response)
        dispatch(increment(response))
    });
  };
}

function fetchUserInfo() {
  return fetch('/api/login')
    .then(response => response.json())
}
