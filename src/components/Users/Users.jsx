import React, {useEffect, useState} from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Albums from "../Albums/Albums";

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            const arr = [];
            res.forEach(user => {
                const obj = {
                    id: user.id,
                    name: user.name
                };
                arr.push(obj);
            })
            setUserList(arr);
        }) 
    }, [])

    return (
        <>
            <div className="userList">
                <Link to='/'>Back</Link>
                <ul>
                {userList.map(user => (
                    <li key={user.id}>
                        <div>{user.name}</div>
                        <div onClick={() => {setCurrentUserId(user.id)}}>
                            <Link to={`/${user.id}/albums`}>Albums</Link>
                        </div>
                    </li>
                ))}
                </ul>
            </div>

            <div className="userAlbums">
                <Switch>
                    <Route path={`/${currentUserId}/albums`}>
                        <Albums userId={currentUserId}/>
                    </Route>
                    
                    <Route path='/'>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default Users;