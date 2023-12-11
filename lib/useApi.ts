import getConfig from "next/config";

type Headers = {
  [key: string]: string;
};

export const useApiBase = async <T>(path: string, options: any) => {
  const { publicRuntimeConfig } = getConfig();

  const headers: Headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(path, {
    credentials: "include",
    baseURL: publicRuntimeConfig.API_URL,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
  console.log("response", res);
  const data = await res.json();
  return data as T;
};
