"use client";

import getConfig from "next/config";

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

export default async function useApiBase(path: string, options: any) {
  // const { publicRuntimeConfig } = getConfig();
  const headers: Headers = {
    "Content-Type": "application/json",
  };

  const response = await fetch("https://mauth.ratchaphon1412.co" + path, {
    ...options,

    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  const data = await response.json();

  return data;
}
