import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Photos from "../Photos/Photos";

const Albums = ({userId}) => {

    const [albumList, setAlbumList] = useState([]);
    const [currentAlbumId, setCurrentAlbumId] = useState(0);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(res => res.json())
        .then(res => {
            const arr = [];
            res.forEach(album => {
                const obj = {
                    id: album.id,
                    name: album.title
                };
                arr.push(obj);
            })
            setAlbumList(arr);
        }, []) 
    })

    return (
        <BrowserRouter>
            <div className="userList">
                <ul>
                {albumList.map(album => (
                    <li key={album.id}>
                        <div>{album.name}</div>
                        <div onClick={() => {setCurrentAlbumId(album.id)}}>
                            <Link to={`/${userId}/albums/${album.id}`}>Photos</Link>
                        </div>
                    </li>
                ))}
                </ul>
            </div>

            <div className="photos">
                            <Switch>
                                <Route path={`/${userId}/albums/${currentAlbumId}`}>
                                    <Photos userId={userId} albumId={currentAlbumId}/>
                                </Route>

                                <Route Route path='/'>
                                </Route>
                            </Switch>
                        </div>
        </BrowserRouter>
    );
}

export default Albums;


