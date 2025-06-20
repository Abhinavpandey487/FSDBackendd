import React from 'react'
import axios from 'axios'
const Update = () => {
    const handleupdate = async (e)=>{
        e.preventDefault()
        const id = e.target.id.value;
        const name = e.target.name.value;
        const age = e.target.age.value;
        const users = {name,age}
        await axios.put(`https://fsdbackendd-3.onrender.com/users/${id}`,users )
        alert('User updated Successfully')
    }
  return (
    <div>
        <h1>Update User</h1>

      <p>Please fill in the form below to update a user.</p>
      <form onSubmit={handleupdate}>
        User ID<input type="text" placeholder="User ID" name="id" required/>
        Name<input type="text" placeholder="Name" name="name" required/>
        Age<input type="number" placeholder="Age" name="age" required/>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Update
