import AxiosService from "./axios-service";
import store from "../store";
import native from "../native";

const login = async (email, password) => {
  const res = await AxiosService.post("/api/login/admin", {
    email: email,
    password: password
  });
  store.commit("login", {
    email: email,
    accessToken: res.data.accessToken
  });
  native.login();
  return res;
};

const auth = async () => {
  const token = store.state.accessToken;
  if (token) {
    try {
      await AxiosService.post("/api/auth/admin", {
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

const logout = async () => {
  native.logout();
};

export default {
  login,
  auth,
  logout
};
