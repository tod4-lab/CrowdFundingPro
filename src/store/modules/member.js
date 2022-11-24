import {reqLogin, reqLogOut} from "@/api/member";
import {getToken, removeToken, setToken} from "@/util/auth";
import {reqGetMemberInfo} from "@/api/member";

const getDefaultState = () => {
    return {
        token: getToken(),
        userName: '',
        phoneNumber: ''
    }
}

const state = getDefaultState()

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    RESET_STATE(state) {
        Object.assign(state, getDefaultState())
    },
    SAVE_USERNAME(state, userName) {
        state.userName = userName
    },
    SAVE_PHONE_NUM(state, phoneNumber) {
        state.phoneNumber = phoneNumber
    }
}

const actions = {
    async login({commit}, loginForm) {
        let res = await reqLogin(loginForm)
        if(res.code === 200) {
            commit('SET_TOKEN', res.data)
            setToken(res.data)
        }
        return res
    },
    async getMemberInfo({commit}) {
        let res = await reqGetMemberInfo()

        if(res.code === 200) {
            commit('SAVE_USERNAME', res.data.userName)
            commit('SAVE_PHONE_NUM', res.data.phoneNumber)
        } else {
            // 无法根据token请求到信息，删除vux中以及浏览器存储的token
            commit('RESET_STATE')
            removeToken()
        }
        return res
    },

    async logout({commit}) {
        let res = await reqLogOut()
        if(res.code === 200) {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
        }
        return res
    },

    resetToken({commit}) {
        return new Promise(resolve => {
            removeToken() // must remove  token  first
            commit('RESET_STATE')
            resolve()
        })
    }
}

const getters = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
