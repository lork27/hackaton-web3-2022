import { createContext, useContext, useState } from "react";
import { api, addAuthHeader, removeAuthHeader } from "../../api/api-config";

export type authObject = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  municipality?: string;
  onSuccess?: () => {};
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
  userData: undefined,
});

export const AuthController = (props: any) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user")!)
  );
  const [error, setError] = useState(undefined);

  console.log({ userData });
  console.log(JSON.parse(localStorage.getItem("user")!));

  const logIn = async function (params: authObject) {
    console.log("trying to log in: ", params);
    setError(undefined);
    const { password, email, onSuccess } = params;
    const response = await api.post(
      "users/login",
      { email, password },
      { validateStatus: () => true }
    );
    if (response.status === 201) {
      setUserData(response.data);
      console.log("log in: ", userData);
      setLocalData(response.data);
      addAuthHeader();
      if (onSuccess) {
        onSuccess();
      }
    }
    if (response.status !== 201) {
      setError(response.data.error);
      console.log(error);
    }
  };

  const registerUser = async function (params: authObject) {
    console.log("trying to register: ", params);
    console.log(await api.get("/"));
    const { firstName, lastName, email, password, onSuccess, municipality } =
      params;
    setError(undefined);
    const response = await api.post(
      "/signup",
      { firstName, lastName, email, password, municipality },
      { validateStatus: () => true }
    );

    console.log({ response });
    if (response.status === 201) {
      setUserData(response.data.newUser);
      console.log(userData);
      setLocalData(response.data.newUser);
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

  const logOut = async function (onSuccess: authObject["onSuccess"]) {
    api.put("users/logout");
    localStorage.removeItem("user");
    removeAuthHeader();
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logIn,
        logOut,
        registerUser,
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
