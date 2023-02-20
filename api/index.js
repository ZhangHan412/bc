export default ($axios) => {
    return {
        getData: () => $axios.get('/api'),
        // 有参数的情况
        postData: data => $axios.post('/api', data),
        getData: params => $axios.get('/api', { params })
    }

}