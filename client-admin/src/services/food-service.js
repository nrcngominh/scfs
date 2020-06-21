import AxiosService from "./axios-service";

const getAll = async () => {
  return await AxiosService.get("/api/food");
};

const update = async (food) => {
  return await AxiosService.put("/api/food", food)
}

const removeById = async (id) => {
  return await AxiosService.delete("/api/food", {
    data: {
      _id: id
    }
  })
}

export default {
  getAll,
  update,
  removeById
};
