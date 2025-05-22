import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase-init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        // alert("Sign in successfully");
        toast.success("User Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    setErrorMsg("");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("A password reset email has been sent!");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center px-4">
      <Helmet>
        <title>Event | Login</title>
      </Helmet>
      <div className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-xl rounded-xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-violet-300"
              required
            />
          </div>
          <div className="text-sm">
            <button
              type="button"
              onClick={handleForgetPass}
              className="text-violet-200 hover:underline"
            >
              Forgot password?
            </button>
          </div>
          {error && <p className="text-red-300 text-xs">{error}</p>}
          {errorMsg && <p className="text-red-300 text-xs">{errorMsg}</p>}
          <button
            type="submit"
            className="w-full cursor-pointer bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition"
          >
            Login
          </button>
          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-red-300 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer autoClose={3000} position="top-right" theme="colored" />
    </div>
  );
};

export default SignIn;
