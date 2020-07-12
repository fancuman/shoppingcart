import shop from '../../api/shop';
const state = { all: [] }
const getters = {
    products: state => state,

}
const mutations = {
    setProducts: (state, products) => state.all = products,
    decreaseInventory: (state, id) => {
        state.all.find(item => item.id === id).inventory--
    }
}
const actions = {
    getProductList: ({ commit }) => {
        shop.getAllProducts(products => commit('setProducts', products))
    },
}
export default {
    state,
    namespaced: true,
    getters,
    mutations,
    actions
}