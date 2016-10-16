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

let setUserInfo = function(data) {
  return {
    type: 'getUserInfo',
    userInfo: data
  }
}


export function getUserInfo() {
  return function (dispatch) {
    return fetchUserInfo()
    .then(response => {
        dispatch(setUserInfo(response))
    });
  };
}

function fetchUserInfo(phone) {
  return fetch('/api/user', {
        credentials: 'same-origin' // <- this is mandatory to deal with cookies
    })
    .then(response => response.json())
}

function fetchLoginInfo(phone) {
  let path = !phone ? '/api/login' : ('/api/login?phone=' + phone);
  return fetch(path, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
}

export function changePhoneNumber(number) {
  return {
    type: 'setPhoneNumber',
    phoneNumber: number
  }
}

export function getVerCode(number) {
  return function (dispatch) {
    return fetchLoginInfo(number)
    .then(response => {
        dispatch(setVerCode(response))
    });
  };
}

export function setVerCode(number) {
  return {
    type: 'setVerCode',
    verCode: number
  }
}

export function checkVerCode(code, phoneNumber) {
  return function (dispatch) {
    return fetchCheckCode(code, phoneNumber)
    .then(response => {
        dispatch(setLoginInfo(response))
    });
  };
}

export function setLoginInfo(data) {
  return {
    type: 'setLoginInfo',
    loginInfo: data
  }
}

function fetchCheckCode(code, phoneNumber) {
  return fetch('/api/login/checkSms?phone=' + phoneNumber + '&smscode=' + code, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
}