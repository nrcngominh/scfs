import axios from 'axios'

const getFoodByCategory = async (category) => {
    const res = await axios.get('/api/food')
    return res.data.filter(item => item.category == category)[0].foods    
}

export default {
    getFoodByCategory
}