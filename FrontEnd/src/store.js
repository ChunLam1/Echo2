import { createStore } from 'vuex';

export default createStore({
  state: {
    isLogged: false,
  },
  mutations: {
    setIsLogged(state, value) { 
      state.isLogged = value;
    },
  },
});
