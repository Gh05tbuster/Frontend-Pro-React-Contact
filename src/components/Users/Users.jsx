import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

const Users = () => {
    const [userList, setUserList] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(0);

    useEffect(()=>{
        // const fetchData = async () => {
        //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
        //     const json = res.json();
        //     setUserList(json);
        // }
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
                        <p>{user.name}</p>
                        <Link to={`/${user.id}/albums`}>Albums</Link>
                    </li>
                ))}
                </ul>
            </div>

            {/* <div className="userAlbums">
                <Switch>
                    <Route path={`/${currentUserId}/albums`}>
                        <Albums userId={currentUserId}/>
                    </Route>
                    
                    <Route path='/'>
                    </Route>
                </Switch>
            </div> */}
        </>
    );
}

export default Users;