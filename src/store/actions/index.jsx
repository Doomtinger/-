import {SET_USERINFO, LOGIN_OUT} from '../actionTypes'
import {getUserInfo, loginOut} from '../../assets/js/loginApi'
import history from '../../utils/history'
import {message} from 'antd'
import {authenticateSuccess,logout} from '../../utils/Session'
export const initUser = params => {
    // console.log(params)
    return {
        type: SET_USERINFO,
        params
    }
}

export const loginOuts = params => {
    return {
        type: LOGIN_OUT,
        params
    }
}

export const initUserInfo = (params) => {
    return async dispatch => {
        await getUserInfo(params).then( res=> {
            console.log(res)
            let obj= {}
            obj.name= 'wei'
            localStorage.setItem('name', 'wei')
            obj.login= 'yes'
            localStorage.setItem('login', 'yes')
            obj.token = res.access_token
            authenticateSuccess(obj.name)
            dispatch(initUser(obj))
        }).catch( err => {
            message.error(err.message)
        })
    }
}

export const initLoginOut = () => {
    return async dispatch => {
        await loginOut().then( res => {
            console.log(res)
            let obj= {}
            obj.name= ''
            localStorage.setItem('name', '')
            obj.login= 'no'
            localStorage.setItem('login', 'no')
            dispatch(loginOuts(obj))
            logout()
            history.push({pathname: '/login'})
        }).catch( err => {
            message.error(err.message)
        })
    }
}
