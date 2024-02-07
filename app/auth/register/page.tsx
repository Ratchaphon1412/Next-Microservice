"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [formRegister, setFromRegister] = useState({
    fistname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    profile: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="md:flex justify-center items-center bg-black pt-36">
      <div className="md:basis-1/2">
        <div className="h-screen flex flex-col justify-center items-center">
          <p className="text-white text-3xl font-semibold tracking-wide mb-10">
            LET US GET YOU STARTED
          </p>

          <form className="w-1/2">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      fistname: e.target.value,
                    })
                  }
                  value={formRegister.fistname}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Fist Name
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      lastname: e.target.value,
                    })
                  }
                  value={formRegister.lastname}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      email: e.target.value,
                    })
                  }
                  value={formRegister.email}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Email address
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="tel"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      username: e.target.value,
                    })
                  }
                  value={formRegister.username}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Username
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="tel"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      phone: e.target.value,
                    })
                  }
                  value={formRegister.phone}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Phone
                </label>
              </div>
            </div>
            <div className="flex my-10">
              <div className="mr-4">
                <label htmlFor="underline_select" className="sr-only">
                  Underline select
                </label>
                <p className="mb-3 text-white">Gender</p>
                <select
                  id="underline_select"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      gender: e.target.value,
                    })
                  }
                  value={formRegister.gender}
                  className="block w-full text-sm text-white bg-transparent rounded-lg border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 bg-gray-200 peer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="tel"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      country: e.target.value,
                    })
                  }
                  value={formRegister.country}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Country
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      password: e.target.value,
                    })
                  }
                  value={formRegister.password}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Create password
                </label>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="password"
                  id="floating_outlined"
                  onChange={(e) =>
                    setFromRegister({
                      ...formRegister,
                      confirmPassword: e.target.value,
                    })
                  }
                  value={formRegister.confirmPassword}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Confirm password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn w-full text-black bg-amber-400 hover:bg-amber-500 text-2xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
