import axios from "axios";

const instance = axios.create({ baseURL: process.env.REACT_APP_URL });

const setToken = (token) => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = "";
};
export const registerUserLoad = async (data) => {
  const { data: result } = await instance.post("/user/register", data);
  setToken(result.token);
  return result;
};

export const loginUserLoad = async (data) => {
  const { data: result } = await instance.post("/user/login", data);
  setToken(result.token);
  return result.user;
};

export const logoutUserLoad = async () => {
  const { data } = await instance.post("/user/logout");
  setToken();
  return data;
};

export const verifyUserLoad = async (verificationCode) => {
  try {
    return await instance.post(`/user/verify/${verificationCode}`);
  } catch (err) {
    console.log(err.message);
  }
};

export const getCurrentUserLoad = async (token) => {
  try {
    setToken(token);
    const { data } = await instance.get("/user/current");
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
