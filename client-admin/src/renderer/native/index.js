const { BrowserWindow } = window.require('electron').remote

const login = () => {
  const mainWindow = BrowserWindow.getFocusedWindow()
  mainWindow.maximize()
}

const logout = () => {
  const mainWindow = BrowserWindow.getFocusedWindow()
  mainWindow.restore()
  mainWindow.setSize(0,0)
  mainWindow.center()
}

export default {
  login,
  logout
}
