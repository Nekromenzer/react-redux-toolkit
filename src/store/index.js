import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userData/reducer'

const store = configureStore({
  reducer: {
    userData: userDataReducer
  }
})

export { store }
