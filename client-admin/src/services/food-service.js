import axios from "axios";
const { ipcRenderer } = window.require("electron");

const getAll = async () => {
  return await axios.get("/api/food");
};

const update = async food => {
  return await axios.put("/api/food", food);
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

const removeById = async id => {
  return await axios.delete("/api/food", {
    data: {
      _id: id
    }
  });
};

export default {
  getAll,
  update,
  uploadImage,
  removeById
};
