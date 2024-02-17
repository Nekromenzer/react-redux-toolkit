import { useDispatch, useSelector } from "react-redux";
import {
  clearUserData,
  setUserAge,
  setUserEmail,
  setUserName,
} from "./store/userData/constant";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userData);
  const { name, email, age } = userData;

  const handleClear = () => {
    const payload = {
      name: "",
      email: "",
      age: 0,
    };
    dispatch({
      type: clearUserData,
      payload: payload,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const getType = {
      name: setUserName,
      email: setUserEmail,
      age: setUserAge,
    };

    dispatch({
      type: getType[name],
      payload: value,
    });
  };

  return (
    <>
      <div
        style={{
          marginBottom: "10px",
          fontSize: "20px",
        }}
      >
        {name} {email} {age !== 0 && age}
      </div>

      <input
        type="text"
        placeholder="john"
        name="name"
        value={name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="john@gmail.com"
        name="email"
        value={email}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <input
        type="number"
        placeholder="23"
        name="age"
        value={age}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <br />
      <button onClick={() => handleClear()}>clear form</button>
    </>
  );
}

export default App;
