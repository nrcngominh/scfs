import axios from 'axios'

const getAllCategories = async () => {
  return await axios.get('/api/category')
}

export {
  getAllCategories
}