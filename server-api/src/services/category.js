import CategoryRepo from '@repository/category'

const getAll = async () => {
  return await CategoryRepo.findAll()
}

export default {
  getAll
}