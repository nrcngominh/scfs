const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')

const getAllFood = async () => {
  return await axios.get("/api/food")
}

const removeFoodById = async id => {
  return await axios.delete("/api/food", {
    data: {
      _id: id
    }
  })
}

const updateFoodInfo = async food => {
  return await axios.put("/api/food", food)
}

const uploadFoodImage = async (foodId, imagePath) => {
  const data = new FormData()
  data.append("uploaded_image", fs.createReadStream(imagePath))
  data.append("_id", foodId)

  return await axios.put("/api/upload/food", data, {
    headers: {
      ...data.getHeaders()
    }
  })
}

export {
  getAllFood,
  removeFoodById,
  updateFoodInfo,
  uploadFoodImage
}