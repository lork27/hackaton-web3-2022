import { createContext, useContext, useState } from "react";
import { api, addAuthHeader, removeAuthHeader } from "../../api/api-config";

export type authObject = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  municipality?: string;
  onSuccess?: () => void;
};

export type userDataType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  municipality?: string;
  reports?: [];
  phone?: string;
  verified?: verified;
  createdAt?: string;
};

type verified = {
  verifiedDate: string;
  blockchainUID: string;
  walletAddress: string;
};

addAuthHeader();
const setLocalData = (userData: any) => {
  const localData = JSON.parse(localStorage.getItem("user")!);
  localStorage.setItem("user", JSON.stringify({ ...localData, ...userData }));
};

const AuthContext = createContext({
  logIn: (params: authObject) => {},
  logOut: (onSucces?: authObject["onSuccess"]) => {},
  registerUser: (params: authObject) => {},
  verifyUser: (walletAddress: string) => {},
  userData: {} as userDataType,
});

export const AuthController = (props: any) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")!)
  );
  const [error, setError] = useState(undefined);

  const logIn = async function (params: authObject) {
    setError(undefined);
    const { password, email, onSuccess } = params;
    const response = await api.post(
      "users/login",
      { email, password },
      { validateStatus: () => true }
    );
    if (response.status === 200) {
      setUserData(response.data);
      setLocalData(response.data);
      addAuthHeader();
      if (onSuccess) {
        onSuccess();
      }
    }
    if (response.status !== 200) {
      setError(response.data.error);
      console.log(error);
    }
  };

  const registerUser = async function (params: authObject) {
    const { firstName, lastName, email, password, onSuccess, municipality } =
      params;
    setError(undefined);
    const response = await api.post(
      "/signup",
      { firstName, lastName, email, password, municipality },
      { validateStatus: () => true }
    );

    console.log(response.data);

    if (response.status === 201) {
      setUserData(response.data);
      setLocalData(response.data);
      addAuthHeader();
      if (onSuccess) {
        onSuccess;
      }
    }
    if (response.status !== 201) {
      setError(response.data.message);
      console.log(error);
    }
  };

  const logOut = async function () {
    api.put("users/logout");
    localStorage.removeItem("user");
    removeAuthHeader();
  };

  const verifyUser = async function (walletAddress: string) {
    setError(undefined);
    const response = await api.put(
      "user/verifyUser",
      { walletAddress },
      { validateStatus: () => true }
    );
    if (response.status === 200) {
      setUserData(response.data);
      setLocalData(response.data);
    }
    if (response.status !== 200) {
      setError(response.data.error);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        registerUser,
        verifyUser,
        userData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
