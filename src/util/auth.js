import Cookies from 'js-cookie'

const tokenKey = 'CROWD_FUNDING_TOKEN'

export function getToken() {
    return Cookies.get(tokenKey)
}

export function setToken(value) {
    Cookies.set(tokenKey, value)
}

export function removeToken() {
    Cookies.remove(tokenKey)
}

