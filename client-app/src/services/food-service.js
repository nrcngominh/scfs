import axios from 'axios'


const getFoodsByCategory = async (category) => {
    const res = await axios.get('/api/food')
    return res.data.filter(item => item.category == category)[0].foods
}

const getCategories = async () => {
    const res = await axios.get('/api/food')
    return res.data.map(item => item.category);
}

export default {
    getFoodsByCategory,
    getCategories
}