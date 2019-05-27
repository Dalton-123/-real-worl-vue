import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    alias: ""
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    }
  },

  actions: {
    set_user(state, payload) {
      firebase.auth().onAuthStateChanged(user => {
         payload = user;
          state.commit("SET_USER", payload);
          console.log(payload);
      });
    }
  },

  getters: {
    CurrentUser(state) {
      return state.user.email;
    }
  }
});
