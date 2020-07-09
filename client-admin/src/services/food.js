const { ipcRenderer } = window.require("electron");

import { getAllFood, removeFoodById, updateFoodInfo } from '@/api/food'

const getAll = async () => {
  return await getAllFood()
};

const removeById = async id => {
  return await removeFoodById(id)
};

const updateInfo = async food => {
  return await updateFoodInfo(food)
};

const uploadImage = async (_id, imagePath) => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on("upload-food-image-reply", (event, arg) => {
      console.log(arg);
      resolve(arg);
    });

    ipcRenderer.on("upload-food-image-error", (event, arg) => {
      reject(arg);
    });

    ipcRenderer.send("upload-food-image", {
      _id: _id,
      imagePath: imagePath
    });
  });
};

export default {
  getAll,
  updateInfo,
  uploadImage,
  removeById
};
