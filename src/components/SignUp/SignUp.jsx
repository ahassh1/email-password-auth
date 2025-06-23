import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const SignUp = () => {
  const [errorMessage, setErrorMessage]= useState('')
  const handleSingUp = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);   
    setErrorMessage('')
    
    // create user 
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    setErrorMessage(error.Message)
    })
  }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="card-body">
    
      <h1 className="text-5xl font-bold mb-5">Sign Up or Register now!</h1>
    
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-5xl">
      <div className="card-body">
        <form onSubmit={handleSingUp}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label mt-4">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover mt-2">Forgot password?</a></div>
          <button className="btn btn-neutral mt-6">Sign Up</button>
        </form>
        {
          errorMessage && <p className='text-red-600'>{errorMessage}</p>
        }
    </div>
    </div>
  </div>

</div>
     
        </div>
    );
};

export default SignUp;