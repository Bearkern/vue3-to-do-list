import { createStore } from 'vuex';
import toastMessage from './toastMessage';

export default createStore({
  strict: true,
  state: {
    signInState: false,
  },
  mutations: {
    SIGN_IN_STATE(state, payload) {
      state.signInState = payload;
    },
  },
  actions: {
    updateSignInState(context, payload) {
      context.commit('SIGN_IN_STATE', payload);
    },
  },
  modules: {
    toastMessage,
  },
});
