import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserLoginDetails } from "../../store/UserSlice";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Page() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
      })
    );
  };

  const result = {
    displayName: "Admin",
    photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIjzZCvcctMd78wTE1RBXE0Ys-7s3HPtZdBIx-GE07f2Fia_51W=s96-c"
  };

  const handleAuth = async () => {
    const requestBody = {
      Email: Email,
      Password: Password
    };
    await axios.post('http://127.0.0.1:8000/Auth/', requestBody).then((res) => {
      console.log(res, "response");
      if (res.data.message === "Successfully logged in") {
        toast.success('Successfully Login');
        setUser(result);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className="flex h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="relative hidden h-full w-1/3 sm:block">
        <video
          src="https://cdn.dribbble.com/userupload/13582095/file/original-853f5b93b669724630d13ee760bea9e9.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="flex h-full flex-1 justify-center sm:mx-auto sm:w-full sm:max-w-md sm:items-center">
        <div className="w-full sm:mx-auto sm:max-w-md">
          <div className="px-4 py-12 sm:px-10">
            <h1 className="text-3xl font-semibold text-heading">Sign in</h1>
            <div className="mt-6 flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-heading">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-semibold text-heading">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                    size={20}
                      className="text-gray-500 cursor-pointer mt-6 "
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <AiOutlineEye
                    size={20}
                      className="text-gray-500 cursor-pointer mt-6 "
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm font-semibold text-primary hover:text-primary-accent">
                  Forgot password?
                </a>
              </div>

              <button
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-Black shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
                onClick={handleAuth}
              >
                Login
              </button>

              <button
                type="button"
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
              >
                <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                Sign in with Google
              </button>

              <p className="text-center text-sm text-text">
                No account?{" "}
                <a
                  href="#"
                  className="text-sm font-semibold text-primary hover:text-primary-accent"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
