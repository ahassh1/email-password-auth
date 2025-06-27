import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase.init";

const Login = () => {
    const [success, setSuccess]=useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    const email =e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset 
    setSuccess(false)
    setErrorMessage('');

    // login user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message)
      });
  };


  return (
    <div className="card mt-8 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onClick={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        

        <p>
          New to the website , Please{" "}
          <Link className="text-blue-400 underline" to="/singUp">
            Sing Up 
          </Link>
        </p>
        {
            errorMessage && <p className="text-red-500">{errorMessage}</p>
        }
        {
            success && <p className="text-green-400">User logged in successfully</p>
        }
      </div>
    </div>
  );
};

export default Login;
