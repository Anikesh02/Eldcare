import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.js';

const auth = getAuth(app);

function logInUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
}

function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(email, password);
      const loggedInUser = await logInUser(email, password);
      setUser(loggedInUser);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
      <p>{user.email}</p>
    </div>
  );
}

export default Login;
