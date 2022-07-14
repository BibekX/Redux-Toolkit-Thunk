import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux-toolkit/usersSliceTest";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers("hello"));
  }, [dispatch]);
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
    </div>
  );
}
