import axios from 'axios'

const getAllCategories = async () => {
  const res = await axios.get('/api/category')
  return res.data
}

export {
  getAllCategories
}