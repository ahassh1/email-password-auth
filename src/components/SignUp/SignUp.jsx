import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSingUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    console.log(email, password, terms,photo, name);

    setSuccess(false);

    if (!terms) {
      setErrorMessage();
      setErrorMessage("please accecpt out terms and conditions");
      return;
    }

    // password validation
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (passwordRegExp.test(password) == false) {
      setErrorMessage(
        "Password must have one uppercase character , one lowercase charecter , one digit and 6 characters or longer "
      );
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        // email verify
        sendEmailVerification(auth.currentUser).then(() => {
          setSuccess(true);
          alert("We sent you a verification email, please check your email");
        });

        
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card-body">
          <h1 className="text-5xl font-bold mb-5">Sign Up or Register now!</h1>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-5xl">
            <div className="card-body">
              <form onSubmit={handleSingUp}>
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="your name"
                />
                <label className="label mt-2">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="your photo URL"
                />{" "}
                <label className="label mt-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label mt-4">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? " text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="btn btn-xs absolute top-2 right-6"
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                </div>
                {/* accept checkbox */}
                <lebel className="label mt-2">
                  <input type="checkbox" name="terms" className="checkbox" />
                  Accept Terms and Conditions
                </lebel>
                <br />
                <div>
                  <button className="btn btn-neutral mt-6">Sign Up</button>
                </div>
              </form>

              <p>
                Already have an account ? Please{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login
                </Link>
              </p>

              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              {success && (
                <p className="text-green-500">User has created successfully</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
