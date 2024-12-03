import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { sinInUser } from "./auth";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import CinemaFilmPlay from "../../assets/CinemaFilmPlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const { useLoggedIn } = useAuth();

  const { handleSubmit, onGoogleSignIn } = useAuthRedirect(
    isSignedIn,
    setIsSignedIn,
    sinInUser,
    email,
    password
  );
  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      {useLoggedIn && navigate("/")}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <span className="text-white text-2xl mx-auto">
            Film<span className="text-[#BE0C0C]">flix</span>
          </span>

          {/* <h2 className="card-title text-2xl font-bold mb-6">Login</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="email"
                  className="grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="password"
                  className="grow"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </label>
              <label className="label">
                <Link to="/reset-password">Forgot password?</Link>
                {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="p-3 rounded-md bg-color-dark-blue text-color-light-1">
                Login
              </button>
              <div className="divider">OR</div>
              <button
                onClick={onGoogleSignIn}
                className="flex items-center justify-center flex-1 font-bold text-color-light-1 rounded-md p-3 shadow-sm  shadow-indigo-500/50 hover:shadow-indigo-500/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <span className="px-2"> Log in with Google</span>
              </button>
            </div>
          </form>
          <div className="text-center pt-5">
            <p>Don't have an account?</p>
            <Link to="/register" className="link-primary">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
