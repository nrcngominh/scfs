import AxiosService from "../services/axios-service";
const { ipcRenderer } = window.require('electron');

export default {
  auth: async () => {
    return new Promise((resolve, reject) => {
      ipcRenderer.on("res-get-access-token", async (event, arg) => {
        if (!arg) {
          return reject('Token not found')
        }
        try {
          const res = await AxiosService.post("/api/auth/admin", {
            accessToken: arg
          })
          return resolve(res.data.account.email)
        } catch (error) {
          return reject(error)
        }
      })
      ipcRenderer.send("req-get-access-token");
    })
  },
  logout: async(callback) => {
    ipcRenderer.on("res-delete-access-token", async () => {
      callback() 
    })
    ipcRenderer.send("req-delete-access-token");
  }
}
