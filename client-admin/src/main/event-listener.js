const { ipcMain } = require('electron');
const Store = require('electron-store')

const store = new Store()

ipcMain.on("req-save-access-token", (event, arg) => {
  store.set('accessToken', arg)
})


ipcMain.on("req-get-access-token", (event) => {
  const accessToken = store.get('accessToken')
  event.reply("res-get-access-token", accessToken)
})

ipcMain.on("req-delete-access-token", (event) => {
  store.delete('accessToken')
  event.reply("res-delete-access-token")
})

