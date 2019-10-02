
import React from 'react';
import logo from '../assets/snLogo.svg'
import { Link } from 'react-router-dom';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="App">
      <div className="App-header">
        <div className="landing-text">Register</div>

        <form
          className="form-signin"
          onSubmit={props.handleRegister} >
          <img className="mb-4" src={logo} alt="" width="128" height="128" />
          <p>Username:</p>
          <input className="form-control" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
          <p>Email:</p>
          <input className="form-control" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <p>Password:</p>
          <input className="form-control" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />

          <button className="btn btn-lg btn-primary btn-block">Register</button>
          <Link to="/login">login</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;