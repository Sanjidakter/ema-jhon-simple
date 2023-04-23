import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const [error,setError] = useState('');
    const {createUSer} = useContext(AuthContext);

const handleSignUp = event =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm  = form.confirm.value;
    console.log(email,password,confirm);
    
    setError(' ');

    if(password != confirm)
    {
        setError('Your password did not match');
        return;
    }
    else if(password.length <6)
    {
        setError('password must be 6 characters or long');
        return;
    }
    createUSer(email,password)
    .then(result=>{
      const loggedUSer = result.user;
      console.log(loggedUSer)
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
    })
}

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p><small>Already have an account? <Link to="/login">Login</Link> </small></p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
