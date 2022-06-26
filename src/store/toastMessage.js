export default {
  strict: true,
  namespaced: true,
  state: {
    messages: [],
  },
  mutations: {
    MESSAGE(state, payload) {
      const { style = 'success', title, content } = payload;
      state.messages.push({ style, title, content });
    },
    REMOVE_MESSAGE(state) {
      state.messages.shift();
    },
    HIDE_TOAST(state, payload) {
      state.messages.splice(payload, 1);
    },
  },
  actions: {
    pushMessage(context, payload) {
      context.commit('MESSAGE', payload);
      context.dispatch('showToast');
    },
    showToast(context) {
      setTimeout(() => {
        context.commit('REMOVE_MESSAGE');
      }, 6000);
    },
    hideToast(context) {
      context.commit('HIDE_TOAST');
    },
  },
};
