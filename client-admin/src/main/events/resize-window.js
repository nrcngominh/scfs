const { BrowserWindow, ipcMain } = require("electron")

ipcMain.on('login', () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  mainWindow.maximize();
})

ipcMain.on('logout', () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  mainWindow.restore();
  mainWindow.setSize(0, 0);
  mainWindow.center();
})