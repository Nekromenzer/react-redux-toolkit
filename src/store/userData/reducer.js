const initialState = {
  name: '',
  email: '',
  age: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'SET_USER_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_USER_AGE':
      return {
        ...state,
        age: action.payload
      }
    case 'CLEAR_USER_DATA':
      return {
        ...state,
        name: '',
        email: '',
        age: 0
      }
    default:
      return state
  }
}
