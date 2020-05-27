import request from '@/utils/request.js'

/**
 * 登陆
 * @param {*} params
 */
export const login = params => {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}

/**
 * 退出
 */
export const logout = () => {
  return request({
    url: '/logout',
    method: 'post'
  })
}

/**
 * 用户信息
 */
export const userInfo = params => {
  return request({
    url: '/userInfo',
    method: 'get',
    params
  })
}
