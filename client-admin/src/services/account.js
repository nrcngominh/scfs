const { ipcRenderer } = window.require("electron");

import axios from 'axios'
import { adminAuth } from "@/api/auth";
import { adminLogin } from '@/api/login'

const login = async (email, password) => {
  const res = await adminLogin(email, password);
  axios.defaults.headers["x-access-token"] = res.data.accessToken;
  ipcRenderer.send("login");
};

const logout = async () => {
  delete axios.defaults.headers["x-access-token"];
  ipcRenderer.send("logout");
};

const auth = async () => {
  try {
    await adminAuth();
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
