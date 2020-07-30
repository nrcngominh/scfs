const { dialog, ipcMain } = require("electron")
const path = require('path')

let defaultPath = null

ipcMain.on('select-image', async (event) => {
  const config = {
  properties: ["openFile"],
  filters: [
    {
      name: "Images",
      extensions: ["jpg", "jpeg", "png"]
    }
  ]}
  if (defaultPath) {
    config.defaultPath = defaultPath;
  }
  const result = await dialog.showOpenDialog(config);
  const filePath = result.canceled ? null : result.filePaths[0]
  if (filePath) {
    defaultPath = path.dirname(filePath)
  }
  event.reply('select-image-reply', filePath)
})
