import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, getUsersThunk } from "../redux-toolkit/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          );
        })}
      <button onClick={() => dispatch(getUsersThunk())}>Get data</button>
      <button
        onClick={() => dispatch(addData({ name: "Bob", email: "bob@bob.com" }))}
      >
        Add data
      </button>
    </div>
  );
}
