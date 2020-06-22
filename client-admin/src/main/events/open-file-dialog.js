const { dialog, ipcMain } = require("electron")

ipcMain.on('select-image', async (event) => {
    const result = await dialog.showOpenDialog({
        properties: ["openFile"],
        filters: [
            {
                name: "Images",
                extensions: ["jpg", "jpeg", "png"]
            }
        ]
    });
    const filePath = result.canceled ? null : result.filePaths[0]
    event.reply('select-image-reply', filePath)
})