import React, { useReducer } from 'react';

const Reducer = () => {
  const emptyData = {
    name: '',
    password: '',
    email: '',
  };

  const reducer = (data, action) => {
    return { ...data, [action.type]: action.val };
  };

  // ✅ yaha directly useReducer likho, nested function me nahi
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div>
      <h1>Use Reducer</h1>

      <input
        type="text"
        placeholder="enter name"
        onChange={(event) =>
          dispatch({ type: 'name', val: event.target.value })
        }
      />
      <br /><br />

      <input
        type="password"
        placeholder="enter password"
        onChange={(event) =>
          dispatch({ type: 'password', val: event.target.value })
        }
      />
      <br /><br />

      <input
        type="text"
        placeholder="enter email"
        onChange={(event) =>
          dispatch({ type: 'email', val: event.target.value })
        }
      />
      <br /><br />

      <ul>
        <li>Name: {state.name}</li>
        <li>Password: {state.password}</li>
        <li>Email: {state.email}</li>
      </ul>

      <button>Add Details</button>
    </div>
  );
};

export default Reducer;
