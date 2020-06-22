const {ipcRenderer} = window.require('electron')

import axios from "axios";
import store from "../store";


const login = async (email, password) => {
  const res = await axios.post("/api/login/admin", {
    email: email,
    password: password
  });
  store.commit("login", {
    email: email,
    accessToken: res.data.accessToken
  });
  ipcRenderer.send('login')
  return res;
};

const logout = async () => {
  ipcRenderer.send('logout')
};

const auth = async () => {
  const token = store.state.accessToken;
  if (token) {
    try {
      await axios.post("/api/auth/admin", {
        accessToken: token
      });
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

export default {
  login,
  logout,
  auth
};
