
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/snLogo.svg'

// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (

    <div className="App">
      <div className="App-header">
        <div className="landing-text">login</div>
        <form
          className="form-signin"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin();
          }} >
          <img className="mb-4" src={logo} alt="" width="128" height="128" />
          <p>Username:</p>
          <input className="form-control" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Password:</p>
          <input className="form-control" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
          <button className="btn btn-lg btn-primary btn-block">Login</button>
          <Link to="/register">register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;