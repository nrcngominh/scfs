import AxiosService from "./axios-service";

const getAll = async () => {
  const res = await AxiosService.get("/api/food");
  return res;
};

export default {
  getAll
};
