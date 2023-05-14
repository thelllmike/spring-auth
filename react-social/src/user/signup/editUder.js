import React, { useState, useEffect } from 'react';
import './Signup.css';
import axios from 'axios';
import { Link, useParams, useHistory ,navigate} from "react-router-dom";

function EditUser() {
    let navigate = useNavigate();


  const [user, setUser] = useState({
    name: "",
    email: "",
  
  });

  const { name, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/auth/user/${id}`, user);
    history.push("/profile");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/auth/users/${id}`);
    setUser(result.data);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-item">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={name}
          required
          onChange={onInputChange}
        />
      </div>
      <div className="form-item">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          value={email}
          required
          onChange={onInputChange}
        />
      </div>
     
     
      <div className="form-item">
        <button type="submit" className="btn btn-block btn-primary">
          Edit
        </button>
      </div>
    </form>
  );
}

export default EditUser;
