import indexApi from '@/api/index'
export default function ({ $axios, store }, inject) {
    function axiosConfig($axios) {
        let requestConfig = {}
        // 设置API的域名
        $axios.setBaseURL('https://')
        // 设置请求拦截
        $axios.onRequest((config) => {
            // 用于调试
            if (process.env.DEBUG) {
                console.log('$axios.onRequest', config)
            }
            requestConfig = {
                baseURL: config.baseURL,
                url: config.url,
                method: config.method,
                data: config.data,
                headers: config.headers,
                params: config.params,
            }

            config.startTime = new Date().getTime()
            config.headers['Content-Type'] = 'application/json'
            // token 
            // const token = store.state.token || ''
            // if (token) {
            //   config.headers.Authorization = `Bearer ${token}`
            // }
            return config
        })
        // 设置响应拦截
        $axios.onResponse((response) => {
            response.config.endTime = new Date().getTime()
            const status = response.status

            if (+status === 200) {
                // 打印出每个接口的响应时间
                console.info(response.config.url, '请求时间', response.config.endTime - response.config.startTime + 'ms'
                )
                // 用于调试
                if (process.env.DEBUG) {
                    console.info('$axios.onResponse', response.data)
                }
                // 返回接口数据
                return response.data
            } else {
                // 如果请求失败的，打印出相应的错误信息
                const responseConfig = response ? response.config : {}
                console.error('响应拦截报错提示： ', {
                    url: responseConfig.baseURL + responseConfig.url,
                    status: response.status,
                    statusText: response.statusText,
                    method: responseConfig.method,
                    headers: responseConfig.headers,
                    data: responseConfig.data,
                    params: responseConfig.params,
                    responseData: response.data,
                })
            }
        })

        // axios错误处理
        $axios.onError((error) => {
            const response = error.response || {}
            const responseConfig = response.config || {}
            console.error('$axios.onError: ', error)
            console.error('错误处理提示 ', {
                url: responseConfig.baseURL + responseConfig.url,
                status: response.status,
                statusText: response.statusText,
                method: responseConfig.method,
                headers: responseConfig.headers,
                data: responseConfig.data,
                params: responseConfig.params,
                responseData: response.data,
                ...requestConfig,
            })

        })
        // 最后返回$axios对象
        return $axios
    }
    inject('indexApi', indexApi(axiosConfig($axios.create())))
}

