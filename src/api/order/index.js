import requests from "@/util/requests";


export const reqGenerateOrder = (orderProjectPO) => {
    return requests({
        url: '/crowd-order/order/generateOrder',
        method: 'post',
        data: orderProjectPO
    })
}

export const reqPayOrder = (order) => {
    return requests({
        url: '/pay/orderPay',
        method: 'post',
        data: order
    })
}

export const reqPayReturn = orderNum => {
    return requests({
        url: `/pay/payReturn/${orderNum}`,
        method: 'get'
    })
}
