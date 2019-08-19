import {SET_USERINFO, LOGIN_OUT} from '../actionTypes'
const initState= {
    name: localStorage.getItem('name'),
    login: localStorage.getItem('login')
}

const userReducer = (state= initState, action) => {
    // console.log(action.type)
    switch(action.type) {
        case SET_USERINFO:
            return {
                ...state,
                name: action.params.name,
                login: action.params.login
            }
        case LOGIN_OUT:
            return {
                ...state,
                name: action.params.name,
                login: action.params.login
            }
        default:
            return state
    }
}

export default userReducer