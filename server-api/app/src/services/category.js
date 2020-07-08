import CategoryRepo from '@/repositories/category'

const getAll = async () => {
  return await CategoryRepo.findAll()
}

export default {
  getAll
}