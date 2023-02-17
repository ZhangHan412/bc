const state = () => ({
    count: 22
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