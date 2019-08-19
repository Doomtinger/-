import apiFetch from './apiFetch'

//登录
export const getUserInfo = params => { //获取用户信息（头像、名字）(用户名,密码)
    return apiFetch('post', '/gateway/auth/login', params)
}

export const loginOut = params => { //退出登录的接口  无参数
    return apiFetch('post', '/gateway/auth/logout', params)
}