import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './store/userData/constant'

import './App.css'

function App() {
  const dispatch = useDispatch()

  const userData = useSelector(
    (state) => state.userData
  )

  const { name, email, age } = userData

  const handleSubmit = () => {
    const payload = {
      name: 'Johnny since',
      email: 'jonny@gmail.com',
      age: 25   
    }

    dispatch({
      type: setUserData,
      payload: payload
    })
  }

  return (
    <>
    <div>
      {name} {email} {age!== 0 && age}
    </div>
      <button onClick={()=> handleSubmit('Johnny since')}>
        set user data
      </button>
    </>
  )
}

export default App
