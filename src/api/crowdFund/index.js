import requests from "@/util/requests";

export const reqTypeInfo = () => {
    return requests({
        url: '/crowd-project/project/typeInfoList',
        method: 'get'
    })
}

export const reqTagInfo = () => {
    return requests({
        url: '/crowd-project/project/tagInfoList',
        method: 'get'
    })
}

export const reqLaunchProject = (data) => {
    return requests({
        url: '/crowd-project/project/launchProject',
        method: 'post',
        data
    })
}

