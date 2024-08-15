import axios from "axios";
import { useEffect } from "react";
import axiosApi from "../axios/axios";
import { useAuthContext } from "./useAuthContext";

export const useAxios = () => {
  const { auth, setAuth } = useAuthContext();

  useEffect(() => {
    // request interceptor
    const requestInt = axiosApi.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const responseInt = axiosApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        // check if the error is about token expired---
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          // give an api call for token regeneration---
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { token } = response.data;
            setAuth({ ...auth, authToken: token });
            console.log(`new token ${token}`);
            // set the token in the original requests header--
            originalRequest.headers.Authorization = `Bearer ${token}`;
            // make the api call again--
            return axios(originalRequest);
          } catch (error) {
            throw new Error(error);
          }
        }

        return Promise.reject(error);
      }
    );

    // cleanup
    return () => {
      axiosApi.interceptors.request.eject(requestInt);
      axiosApi.interceptors.response.eject(responseInt);
    };
  }, [auth?.authToken, auth, setAuth]);

  return { axiosApi };
};
