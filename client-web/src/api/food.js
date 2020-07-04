import axios from 'axios'

const getAllFoods = async () => {
  const res = await axios.get('/api/food')
  return res.data
}

export {
  getAllFoods
}