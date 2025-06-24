import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card mt-8 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>

        <p>New to the website , Please <Link className="text-blue-400 underline" to='/singUp'>Sing Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
