import shop from "../../api/shop";
const state = {
  items: [],
  checkoutStatus: null,
};

const mutations = {
  setCartItems: (state, items) => {
    state.items = items;
  },
  addProduct: (state, id) => {
    let findItem = state.items.find((item) => item.id == id);
    if (findItem) {
      findItem.count++;
    } else {
      state.items.push({ id, count: 1 });
    }
  },
  setCheckoutStatus: (state, result) => {
    state.checkoutStatus = result;
  },
};

const actions = {
  addProductToCart: ({ commit }, product) => {
    console.log("add", product);
    commit("addProduct", product.id);
    commit("products/decreaseInventory", product.id, { root: true });
  },
  checkout: ({ commit }) => {
    let savedItems = state.items;
    shop.buyProduct(
      () => {
        commit("setCartItems", []);
        commit("setCheckoutStatus", "success");
      },
      () => {
        commit("setCartItems", savedItems);
        commit("setCheckoutStatus", "failed");
      }
    );
  },
};

const getters = {
  totalPrice: (state, getters) => {
    return getters.cartProducts.reduce(
      (total, product) => product.count * product.price,
      0
    );
  },
  cartProducts: (state, getters, rootState) => {
    return state.items.map((item) => {
      let prd = rootState.products.all.find(
        (product) => product.id === item.id
      );
      return { name: prd.name, price: prd.price, ...item };
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
