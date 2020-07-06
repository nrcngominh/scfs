import axios from 'axios'

const getAllFoods = async () => {
  return await axios.get('/api/food')
}

export {
  getAllFoods
}