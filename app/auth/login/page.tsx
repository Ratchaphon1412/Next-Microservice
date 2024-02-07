"use client";
import Image from "next/image";
import loginPicture from "@/public/assets/images/backgroundImage.png";
import { useState } from "react";
import Link from "next/link";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

import { useAppSelector } from "@/redux/store";

export default function Login() {
  const username1 = useAppSelector((state) => state.authReducer.value.username);

  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };

  return (
    <div className="md:flex justify-center bg-black">
      <div className="w-1/2">
        <div className="h-screen flex flex-col justify-center items-center">
          <p className="text-center text-white text-3xl font-semibold tracking-wide mb-4">
            YOUR ACCOUNT FOR
            <br />
            EVERYTHING <span className="">PI</span>
            <span>XE</span>
            <span>L M</span>
            <span>AN.</span>
          </p>
          <p className="text-xs mb-16 font-semibold tracking-wide text-white">
            Welcome back! {username1}
          </p>
          <form className="w-[60%]">
            <div className="mb-4">
              <div className="relative">
                <input
                  id="floating_outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email
                </label>
              </div>
              {/* <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p> */}
            </div>

            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="floating_outlined2"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined2"
                  className="absolute text-sm text-gray-300 duration-300  transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  password
                </label>
              </div>
              {/* <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p> */}
            </div>

            <div className="flex items-center justify-between my-10">
              <div>
                <input
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <Link
                href="/auth/forget"
                className="text-white text-sm font-medium hover:underline"
              >
                Forgot password
              </Link>
            </div>
            <button
              onClick={onClickLogIn}
              type="button"
              className="btn btn-info w-full text-xl hover:bg-amber-600 bg-amber-400 font-semibold text-white shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Sign in
            </button>
          </form>
          <p className="mt-4">
            Do not have an account?
            <a
              href="/register"
              className="text-[#2674B4]  font-semibold hover:underline"
            >
              {" "}
              Sign up for free!
            </a>
          </p>
        </div>
      </div>
      {/* <div className="hidden basis-1/2 md:flex items-center md:visible">
                <Image
                    src={loginPicture}
                    className="max-h-screen w-full"
                    alt="Picture of the author"
                    // width={fill} automatically provided
                    // height={500} automatically provided
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    // blurDataURL="data:..." automatically provided
                    placeholder="blur" // Optional blur-up while loading
                />
           
            </div> */}
    </div>
  );
}
