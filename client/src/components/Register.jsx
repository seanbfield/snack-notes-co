
import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className="text-center">
      <div className="landing-text">Register</div>

      <form
        className="form-signin"
        onSubmit={props.handleRegister} >
        <p>Username:</p>
        <input className="form-control" name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Email:</p>
        <input className="form-control" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input className="form-control" name="password" type="password" value={props.formData.password} onChange={props.handleChange} />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;