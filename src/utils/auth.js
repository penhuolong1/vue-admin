import cookie from 'js-cookie'
import {COOKIEBASENAME} from './constval'

const tokenkey = `${COOKIEBASENAME}TOKEN`

/**
 * 通过cookie保存token
 */
export const getToken = () => {
  return cookie.get(tokenkey)
}

export const setToken = val => {
  return cookie.set(tokenkey, val)
}

export const removeToken = () => {
  return cookie.remove(tokenkey)
}
