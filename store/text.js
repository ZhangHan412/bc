const state = () => ({
    count: 33
})
const mutations = {
    add(state, data) {
        state.count += data
    }
}
export default {
    namespace:true,
    state,
    mutations
}