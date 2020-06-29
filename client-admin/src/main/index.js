const { app, BrowserWindow, globalShortcut } = require("electron");
const serve = require("electron-serve");
const path = require("path");

const loadUrlForSPA = serve({
  directory: path.join(__dirname, "../../dist")
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    minWidth: 700,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // Disable default menu bar
  mainWindow.setMenu(null);

  // Set title
  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.setTitle("Smart Food Court System Management");
  });

  // Development mode
  if (process.env.ELECTRON_NODE_ENV === "development") {
    console.log("Development mode");
    mainWindow.loadURL("http://localhost:9090/");

    // Short for reload
    globalShortcut.register("f5", () => {
      mainWindow.loadURL("http://localhost:9090/");
    });

    // Shortcur fot devtools
    globalShortcut.register("f12", () => {
      mainWindow.webContents.openDevTools();
    });
  }
  // Production mode
  else {
    loadUrlForSPA(mainWindow);
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// Listen for events from renderer
require("./events");
