"use client";

import toast from "react-hot-toast";

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

  if (localStorage.getItem("accessToken")) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
  }

  return await fetch(path, {
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  }).then(async (response) => {
    if (response.ok) {
      toast.success("Success");
      const data = await response.json();
      console.log("data", data.status);
      return data as T;
    }

    if (response.status === 401) {
      toast.error("Unauthorized");
      await fetch(
        process.env.NEXT_PUBLIC_BASEURL_AUTH + "/api/user/token/refresh/",
        {
          method: "POST",
          body: JSON.stringify({
            refresh: localStorage.getItem("refreshToken"),
          }),
        }
      ).then(async (response) => {
        await response.json();
        if (response.ok) {
          toast.success("Refresh Success");
          const data = await response.json();

          console.log("data", data);
          localStorage.setItem("accessToken", data.access);

          const headers: Headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          };

          const res = await fetch(path, {
            ...options,
            headers: {
              ...headers,
              ...options?.headers,
            },
          });

          console.log("response", res);

          const dataAgain = await res.json();

          console.log("dataAgain", dataAgain);
          return dataAgain as T;
        } else {
          window.location.href = "/auth/login";
          return null as T;
        }
      });

      return null as T;
    } else if (response.status !== 500) {
      const textError = await response.text();
      toast.error(textError);
    } else {
      toast.error("Some thing wrong");
    }

    return null as T;
  });
}
