
import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (

    <div className="text-center">
      <div className="landing-text">login</div>
      <form
        className="form-signin"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >
        {/* <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
        <p>Username:</p>
        <input className="form-control" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input className="form-control" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="btn btn-lg btn-primary btn-block">Login</button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;