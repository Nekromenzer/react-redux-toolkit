const initialState = {
  name: '',
  email: '',
  age: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age
      }
    default:
      return state
  }
}
