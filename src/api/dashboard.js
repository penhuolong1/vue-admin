import request from '@/utils/request.js'

/**
 * transaction/list
 */
export const transactionList = params => {
  return request({
    url: '/transaction/list',
    method: 'get',
    params
  })
}

/**
 * todo/list
 */
export const todoList = params => {
  return request({
    url: '/todo/list',
    method: 'get',
    params
  })
}
