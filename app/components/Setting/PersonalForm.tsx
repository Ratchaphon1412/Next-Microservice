"use client";

import React, { useState } from "react";

import { Button } from "flowbite-react";

import ProfileForm from "./ProfileForm";
import useApiBase from "@/lib/useApi";
import { useAppSelector } from "@/redux/store";

type User = {
  [key: string]: any;
};

type Address = {
  [key: string]: any;
};
export default function PersonalForm({
  user,
  address,
}: {
  user: User;
  address: Array<Address>;
}) {
  const [firstname, setFirstname] = useState(user.first_name);
  const [lastname, setLastname] = useState(user.last_name);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [country, setCountry] = useState(user.country);
  const [addressid, setAddressID] = useState(1);

  async function updateProfile() {
    if (address.length != 0) {
      setAddressID(parseInt(address[0].id));
    }
    const response = await useApiBase<User>(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/profile/",
      {
        method: "PUT",
        body: JSON.stringify({
          address_id: addressid,
          first_name: firstname,
          last_name: lastname,
          phone_number: phoneNumber,
          username: username,
          email: email,
          gender: gender,
          country: country,
        }),
      }
    );
    if (response != null) {
      console.log(response);
    }
  }

  return (
    <div className="rounded-lg border border-stroke w-1/2 bg-black shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <h3 className="font-medium text-white dark:text-white">
          Personal Information
        </h3>
      </div>
      <div className="p-7">
        <form action="#">
          <div className="mb-4">
            <ProfileForm />
          </div>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row">
            {/* Line1 */}

            <div className="w-full sm:w-1/2">
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                  First Name
                </label>
                <input
                  id="floating_outlined"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
              </div>

              {/* Error code */}
              {/* <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p> */}
            </div>

            <div className="w-full sm:w-1/2 gap-2">
              <div className="mb-4">
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                    Last Name
                  </label>
                  <input
                    id="floating_outlined"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                  />
                </div>

                {/* Error code */}
                {/* <p  id="outlined_error_help" className="mt-2 text-xs text-red-600">
                    <span className="font-medium">Oh, snapp!</span> Some error message.
                    </p> */}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Gender
              </label>
              <select
                id="countries"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                {user.gender == "" ? (
                  <>
                    <option selected>Please Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </>
                ) : user.gender != "Male" ? (
                  <>
                    <option>Male</option>
                    <option selected>Female</option>
                  </>
                ) : (
                  <>
                    <option>Male</option>
                    <option>Female</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Email
              </label>
              <input
                id="floating_outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Username
              </label>
              <input
                id="floating_outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Country
              </label>
              <input
                id="floating_outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Phone
              </label>
              <input
                id="floating_outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button outline color="dark">
              {" "}
              Cancel{" "}
            </Button>
            <Button
              color="warning"
              onClick={async (e) => {
                e.preventDefault();
                await updateProfile();
              }}
            >
              {" "}
              Save{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
