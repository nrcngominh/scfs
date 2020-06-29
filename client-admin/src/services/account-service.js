const { ipcRenderer } = window.require("electron");

import axios from "axios";
import store from "../store";

const login = async (email, password) => {
  const res = await axios.post("/api/login/admin", {
    email: email,
    password: password
  });
  store.commit("login", {
    email: email
  });
  axios.defaults.headers["x-access-token"] = res.data.accessToken;
  ipcRenderer.send("login");
  return res;
};

const logout = async () => {
  store.commit("logout");
  delete axios.defaults.headers["x-access-token"];
  ipcRenderer.send("logout");
};

const auth = async () => {
  try {
    await axios.post("/api/auth/admin");
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  login,
  logout,
  auth
};
