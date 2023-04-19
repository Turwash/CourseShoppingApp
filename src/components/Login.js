import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginStyle.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (username === 'Turwash' && password === 'Turwash@123') {
      props.authenticate(username, password);
      history.push('/');
    } else {
      setError(true);
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="mb-3">Log In</h1>
        {error && <div className="alert alert-danger">Invalid username or password</div>}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className="signup-container">
          <p>Don't have an account?</p>
          <a href="/signup" className="signup-link">Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
