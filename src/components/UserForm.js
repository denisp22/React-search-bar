import React, { useState } from 'react'
import { createUser } from '../services/api-client';

const UserForm = () => {
  const [state, setState] = useState({
    data: {
      email: "",
      password: "",
      username: "",
      name: ""
    }
  })

  const { data } = state

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await createUser(data)
      debugger
    } catch(err) {
      debugger
    }
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setState(prev => {
      return {
        data: {
          ...prev.data,
          [name]: files ? files[0] : value
        }
      }
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {data.avatar && (
          <img src={URL.createObjectURL(data.avatar)} alt="avatar" className="w-50"/>
        )}

        <label htmlFor="name">Avatar</label>

        <input
          onChange={handleChange}
          name="avatar"
          type="file"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>

        <input
          value={data.name}
          onChange={handleChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>

        <input
          value={data.username}
          onChange={handleChange}
          name="username"
          type="text"
          className="form-control"
          placeholder="Enter username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>

        <input
          value={data.email}
          onChange={handleChange}
          name="email"
          type="text"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">password</label>

        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default UserForm