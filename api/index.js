export default ($axios) => {
    return {
        // 无参
        getData: () => $axios.get('/api'),
        // 有参
        postData: data => $axios.post('/api', data),
        getData: params => $axios.get('/api', { params })
    }

}