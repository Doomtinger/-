import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = process.env.PUBLIC_URL
// if(process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL= 'http://localhost:3002'
// }else {
//   axios.defaults.baseURL = process.env.PUBLIC_URL
// }

axios.interceptors.request.use(function(config) { //请求拦截器
    if (localStorage.getItem('access_token')) {
        config.headers.accessToken = localStorage.getItem('access_token')
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});

function checkStatus(res, resolve, reject) {
    if (res.status === 200 || res.status === 204) {
        resolve(res.data)
    } else {
        // h5.showTips('网络报了不是200')
        // h5.showTips('网络错误，请稍后重试！')
        reject(res)
    }
}

export default function(method, url, params) {
    //	console.log(url)
    return new Promise((resolve, reject) => {
        if (method === 'get') {
            axios.get(url, { params })
                .then(response => {
                    checkStatus(response, resolve, reject)
                })
                .catch((error) => {
                    // h5.showTips('catch错误')
                    // h5.showTips('网络错误，请稍后重试！')
                    reject(error)
                })
        } else {
            axios.post(url, params)
                .then(response => {
                    checkStatus(response, resolve, reject)
                })
                .catch((error) => {
                    // h5.showTips('网络错误，请稍后重试！')
                    reject(error)
                })
        }
    })
}