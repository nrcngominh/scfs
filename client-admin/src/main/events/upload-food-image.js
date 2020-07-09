const { ipcMain } = require("electron");
const { uploadFoodImage } = require("@/api/food")

ipcMain.on("upload-food-image", async (event, arg) => {
  try {
    const res = await uploadFoodImage(arg._id, arg.imagePath)
    event.reply("upload-food-image-reply", res.data);
  } catch (error) {
    console.log(error);
    event.reply("upload-food-image-error", error);
  }
});
