const initialState = {
  selectedIndex: 0,
  userInfo: ''
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
    default:
      return state
  }
}