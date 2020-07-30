const axios = require('axios')

axios.defaults.baseURL = "http://192.168.1.98";

const getAllCategories = async () => {
    return await axios.get('/api/category')
}

const getAll = async () => {
    return await axios.get("/api/food");
};

const getFoodsByCategory = async () => {
    const foods = (await getAll()).data;
    const categoriesRes = (await getAllCategories()).data;
    categoriesRes.forEach(category => (category.foods = []));
    const categories = foods.map(food => {
        const ownCategory = categoriesRes.find(
            category => category._id === food.categoryId
        );
        ownCategory.foods.push(food);
        food.img =
            (process.env.VUE_APP_DOMAIN || "http://192.168.1.98") + food.img;
        return ownCategory;
    });
    console.log(categories)
    return categories
}

// getFoodsByCategory()

export default {
    getFoodsByCategory
}