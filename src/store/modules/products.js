import shop from "../../api/shop";
const state = { all: [], loadingCompleted: false };
const getters = {};
const mutations = {
  setProducts: (state, products) => (state.all = products),
  decreaseInventory: (state, id) => {
    state.all.find((item) => item.id === id).inventory--;
  },
  setLoadingStatus: (state, result) => (state.loadingCompleted = result),
};
const actions = {
  getProductList: ({ commit }) => {
    shop.getAllProducts((products) => {
      commit("setProducts", products);
      commit("setLoadingStatus", true);
    });
  },
};
export default {
  state,
  namespaced: true,
  getters,
  mutations,
  actions,
};
