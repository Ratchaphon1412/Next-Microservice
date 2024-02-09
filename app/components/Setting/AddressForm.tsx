import React, { useState } from "react";
import { Button } from "flowbite-react";

import useApiBase from "@/lib/useApi";

export function AddressForm() {
  const [fullname, setFullname] = useState("");
  const [detail_address, setDetail_Address] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [zip_code, setZip_Code] = useState("");
  const [phone, setPhone] = useState("");

  async function upDateAddress() {
    const res = await useApiBase(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/address/",
      {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname,
          phone: phone,
          detail_address: detail_address,
          province: province,
          country: country,
          zip_code: zip_code,
        }),
      }
    );

    if (res != null) {
      console.log(res);
      window.location.href = "/auth/setting";
    }
  }

  return (
    //
    <div className="rounded-lg border border-stroke w-1/2  shadow-default ">
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <h3 className="font-medium text-white dark:text-white">
          Address Information
        </h3>
      </div>
      <div className="p-7">
        <form action="#">
          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Home
              </label>
              <input
                id="floating_outlined"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Details
              </label>
              <textarea
                id="message"
                rows={4}
                value={detail_address}
                onChange={(e) => {
                  setDetail_Address(e.target.value);
                }}
                className="block p-2.5 w-full text-sm text-white bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Province
              </label>
              <input
                id="floating_outlined"
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value);
                }}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
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
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                Zip Code
              </label>
              <input
                id="floating_outlined"
                value={zip_code}
                onChange={(e) => {
                  setZip_Code(e.target.value);
                }}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
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
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="text"
                className="block px-2 pb-2 pt-4 w-full text-sm text-white bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="name@flowbite.com"
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
                await upDateAddress();
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
export default AddressForm;
