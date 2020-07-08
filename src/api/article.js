import request from '@/utils/request.js'

/**
 * 文章列表
 * @param {*} params
 */
export const list = params => {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}
