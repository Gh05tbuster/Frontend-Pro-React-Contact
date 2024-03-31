import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Albums = () => {
  const { userId } = useParams();

  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((res) => res.json())
      .then((res) => {
        const arr = [];
        res.forEach((album) => {
          const obj = {
            id: album.id,
            name: album.title,
          };
          arr.push(obj);
        });
        setAlbumList(arr);
      });
  }, [userId]);

  return (
    <div className="albumList">
      <ul>
        {albumList.map((album) => (
          <li key={album.id}>
            <p>{album.name}</p>
            <Link to={`/${userId}/albums/${album.id}`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
