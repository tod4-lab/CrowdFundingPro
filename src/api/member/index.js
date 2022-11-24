import requests from "@/util/requests";
import da from "element-ui/src/locale/lang/da";

export const reqUserInfo = ()=> {
    return requests({
        url: '/crowd-auth/member',
        method: 'get'
    })
}

export const reqSendValidateCode = (data) => {
    return requests({
        url: '/crowd-auth/member/sendMessage',
        method: 'get',
        params: data
    })
}

export const reqRegister = ({loginAcct, userName, userPswd, phoneNumber, validateCode}) => {
    return requests({
        url: '/crowd-auth/member/register',
        method: 'post',
        data: {loginAcct, userName, userPswd, phoneNumber, validateCode}
    })
}

export const reqLogin = (data) => {
    return requests({
        url: '/crowd-auth/member/login',
        method: 'post',
        data
    })
}

export const reqLogOut = () => {
    return requests({
        url: '/crowd-auth/member/logout',
        method: 'get'
    })
}

export const reqIsLoginAcctExist = (data) => {
    return requests({
        url: '/crowd-auth/member/isLoginAcctExist',
        method: 'get',
        params: data
    })
}

export const reqGetMemberInfo = () => {
    return requests({
        url: '/crowd-auth/member/getMemberInfo',
        method: 'get'
    })
}

