import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase-init";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        toast.success("Google Sign In Successful!", {
          autoClose: 3000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    createUser(email, password)
      .then((currentUser) => {
        const newUser = currentUser.user;
        if (newUser) {
          toast.success("Register Success!", {
            autoClose: 3000,
            pauseOnHover: false,
            pauseOnFocusLoss: false,
            theme: "colored",
          });
          e.target.reset();
        }
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...newUser, displayName: name, photoURL: photo });
            navigate("/sign-in");
          })
          .catch(() => {
            toast.warn("User updated partially!", {
              autoClose: 3000,
              pauseOnHover: false,
              pauseOnFocusLoss: false,
            });
            setUser(newUser);
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          pauseOnHover: false,
          pauseOnFocusLoss: false,
        });
      });
  };

  return (
    <div className="min-h-screen bg-violet-500 flex items-center justify-center px-4 pb-20 pt-5">
      <Helmet>
        <title>Event | Register</title>
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
            {nameError && <p className="text-xs text-red-300">{nameError}</p>}
          </div>
          <div>
            <label className="block mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be at least 8 characters, include uppercase, lowercase, and a number"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-2 text-white"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-white/20 text-white py-2 rounded-md hover:bg-white/30 transition"
          >
            Register
          </button>
          <button
            type="button"
            className="w-full mx-auto cursor-pointer mt-2 bg-white/10 hover:bg-white/20 py-2 rounded-md text-white border border-white/30 "
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="inline" size={30} /> Sign In with Google
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-300 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
