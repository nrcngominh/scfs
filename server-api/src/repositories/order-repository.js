import OrderModel from '../models/order-model'

/*
 * Create order
 */
const create = async(order) => {
    return OrderModel.create(order)
}

/*
 * Find by bill id
 */
const findByBillId = async(billId) => {
    return OrderModel.find({
        billId: billId
    })
}

export default {
    create,
    findByBillId
}