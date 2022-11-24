import requests from "@/util/requests";

export const reqGetProjectCardInfoList = ({pageIndex, pageSize}) => {
    return requests({
        url: `/crowd-project/project/projectCardInfoList/${pageIndex}/${pageSize}`,
        method: 'get'
    })
}

export const reqGetProjectDetailInfo = (projectId) => {
    return requests({
        url: `/crowd-project/project/projectDetailInfo/${projectId}`,
        method: 'get'
    })
}

