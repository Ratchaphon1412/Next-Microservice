"use client";
import { Button } from "flowbite-react";
import { useState } from "react";

import useApiBase from "@/lib/useApi";

export default function verifyEmail({ params }: { params: { uid: string } }) {
  const [uidData, setUidData] = useState("");

  const verifyButton = async () => {
    const decode = await decodeURIComponent(params.uid);
    console.log("original", params.uid);
    console.log("decode", decode);

    const response = await useApiBase<JSON | null>(
      process.env.NEXT_PUBLIC_BASEURL_AUTH + `/api/user/active/`,
      {
        method: "POST",
        body: JSON.stringify({ token: decode }),
      }
    );

    if (response != null) {
      console.log(response);
      window.location.href = "/auth/login";
    }
  };

  return (
    <div className="h-screen w-full bg-black">
      <div className="flex flex-col justify-center items-center gap-8 w-full h-full">
        <h1 className="text-4xl text-white">Verify Your Email</h1>
        <p className="text-white text-center">
          Click the button below to verify your email address.
        </p>
        <Button
          color="warning"
          onClick={async (e) => {
            e.preventDefault();
            await verifyButton();
          }}
        >
          <p className="text-black font-bold text-md">Verify</p>
        </Button>
      </div>
    </div>
  );
}
