import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        const arr = [];
        res.forEach((user) => {
          const obj = {
            id: user.id,
            name: user.name,
          };
          arr.push(obj);
        });
        setUserList(arr);
      });
  }, []);

  return (
    <div className="userList">
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <Link to={`/${user.id}/albums`}>Albums</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
