const { ipcMain } = require("electron")
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

ipcMain.on('upload-food-image', async (event, arg) => {
    const data = new FormData();
    data.append('uploaded_image', fs.createReadStream(arg.imagePath));
    data.append('_id', arg._id);

    try {
        const res = await axios.put('/api/upload/food', data, {
            headers: {
                ...data.getHeaders()
            }
        })
        event.reply('upload-food-image-reply', res.data)
    } catch (error) {
        console.log(error)
        event.reply('upload-food-image-error', error)
    }
})