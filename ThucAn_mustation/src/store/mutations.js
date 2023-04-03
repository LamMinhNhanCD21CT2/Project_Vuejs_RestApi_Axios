const mutations = {
  changesFilterValue(state, data) {
    state.searchValue = data;
  },
  handleUpdateCart(state, data) {
    var newData = {
      ...data,
      quantily: 1,
    };
    var isAdd = state.cart.find((item) =>
      item.id == data.id ? (item.quantily += 1) : ""
    );
    isAdd ? "" : state.cart.push(newData);
    //console.log(state.cart)
  },
  handlePlus(state, id) {
    state.cart.find((item) => (item.id == id ? (item.quantily += 1) : ""));
  },

  handleMinus(state, id) {
    state.cart.find((item) => {
      if (item.id == id) {
        if (item.quantily > 1) {
          item.quantily -= 1;
          return state.cart;
        } else {
          const newArr = state.cart.filter((item) => item.id !== id);
          return newArr;
          //commit('setCart', newArr)
        }
      }
    });
  },
  delcart(state, id) {
    state.cart.splice(
      state.cart.findIndex((e) => {
        return e.id === id;
      }),
      1
    );
    state.cartcount = state.cart.length;
  },
  delAllcart(state) {
    state.cart = [];
    state.cartcount = state.cart.length;
  },
};

export default mutations;
