const initialState = {
  selectedIndex: 0
}

export default function update(state = initialState, action) {
  if(action.type === 'select') {
    return { selectedIndex: action.index }
  }

  return state
}