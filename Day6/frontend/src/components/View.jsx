import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        handleview();
    },[])
    const handleview= async () => {
        const res=await axios.get('https://fsdbackendd-3.onrender.com/users');
        setUsers(res.data);
        console.log(users);
    }
    
  return (
    <div>
        <h1>List of Registered Users</h1>
        <table style={{width: '100%',border: '3px solid yellowgreen',backgroundColor: 'greenyellow'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
               
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default View
