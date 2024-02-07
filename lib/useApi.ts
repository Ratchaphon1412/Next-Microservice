"use client";

import getConfig from "next/config";
import toast from "react-hot-toast";

import { useAppSelector } from "@/redux/store";
import { use } from "react";

type Headers = {
  [key: string]: string;
};

// export const useApiBase = async <T>(path: string, options: any) => {
//   const { publicRuntimeConfig } = getConfig();

//   const headers: Headers = {
//     "Content-Type": "application/json",
//   };
//   const res = await fetch(path, {
//     credentials: "include",
//     baseURL: publicRuntimeConfig.API_URL,
//     ...options,
//     headers: {
//       ...headers,
//       ...options?.headers,
//     },
//   });

//   console.log("response", res);
//   const data = await res.json();
//   return data as T;
// };

export default async function useApiBase<T>(
  path: string,
  options: any
): Promise<T | null> {
  const headers: Headers = {
    "Content-Type": "application/json",
  };

  return fetch(process.env.NEXT_PUBLIC_BASEURL + path, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  }).then(async (response) => {
    if (response.ok) {
      toast.success("Success");
      const data = await response.json();
      console.log("data", data);
      return data as T;
    }
    const textError = await response.text();
    toast.error(textError);

    return null as T;
  });
}
