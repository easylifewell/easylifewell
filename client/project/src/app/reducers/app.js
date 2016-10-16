const initialState = {
  selectedIndex: 0,
  userInfo: '',
  phoneNumber: '',
  verCode: '',
  loginInfo: ''
}

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'select':
      return Object.assign({}, state, {
        selectedIndex: action.index
      })
    case 'getUserInfo':
      return Object.assign({}, state, {
        userInfo: action.userInfo
      })
    case 'setPhoneNumber':
      return Object.assign({}, state, {
        phoneNumber: action.phoneNumber
      })
    case 'setVerCode':
      return Object.assign({}, state, {
        verCode: action.verCode
      })
    case 'setLoginInfo':
      return Object.assign({}, state, {
        loginInfo: action.loginInfo
      })
    default:
      return state
  }
}