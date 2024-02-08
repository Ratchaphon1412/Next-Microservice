"use client";
import { useState } from "react";

import useApiBase from "@/lib/useApi";

export default function ForgetPage() {
  const [useEmail, setUseEmail] = useState("");

  async function handleSubmit() {
    const response = await useApiBase<JSON | null>(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + `/api/user/reverify/`,
      {
        method: "POST",
        body: JSON.stringify({ email: useEmail }),
      }
    );

    if (response != null) {
      console.log(response);
      window.location.href = "/auth/login";
    }
  }

  return (
    <div className="md:flex w-full justify-center items-center">
      <div className="bg-black w-1/2">
        <div
          className="h-screen flex flex-col justify-center items-center "
          id="intro"
        >
          <p className="text-white text-3xl font-semibold tracking-wide mb-6 text-center">
            Re-Send Verify Email
            <br />
            Pixel Man Thailand.
          </p>

          <form action="" className="w-1/2">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  id="floating_outlined"
                  value={useEmail}
                  onChange={(e) => setUseEmail(e.target.value)}
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
            </div>

            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                await handleSubmit();
              }}
              className="btn hover:bg-amber-600 w-full text-black bg-amber-400 text-3xl"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
