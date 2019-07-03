import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import db from "@/firebase/init";
import moments from "moment";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "The Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo, Democratic Republic of the",
      "Congo, Republic of the",
      "Costa Rica",
      "Côte d’Ivoire",
      "Croatia",
      "Cyprus",
      "Czech Republic"
    ],
    categories: [
      { name: "Animated" },

      { name: "Blessings" },
      { name: "Divorce" },
      { name: "Duplicates" },
      { name: "Finance" },
      { name: "Humor" },
      { name: "Ideas" },
      { name: "Inspirational Business" },
      { name: "Love" },
      { name: "Marriage" },
      { name: "Men against Women" },
      { name: "Nutrition" },
      { name: "Political" },
      { name: "Purpose" },
      { name: "Relationship" },
      { name: "Religious" },
      { name: "Roman" },
      { name: "Sports" },
      { name: "Women against" }
    ],
    viewProfile: [],
    profile: [],
    id: "vygh",
    name: null,
    Users: [],
    Gallery: [],
    test: router.currentRoute.params.id,
    Emoji: [],
    carousel:[],
    loading:null
  },
  mutations: {
    PROFILE(state, payload) {
      state.profile.push(payload);
    },
    //  View Profile
    ViewProfile(state, payload) {
      state.viewProfile.push(payload);
    },
    gallery(state, payload) {
      state.Gallery = payload;
    },
    USERS(state, payload) {
      state.Users.push(payload);
    },
    ID(state, payload) {
      state.id = payload;
    },
    Emoji(state, payload) {
      state.Emoji.push(payload);
    },
    carousel(state,payload){
      state.carousel=payload
    },
    loading(state,payload){
      state.loading=payload
    }
  },

  actions: {

    carousel({commit,getters},payload){
      commit('loading',true)
      let me=getters.try
      db.collection('Memes').where('category','==',me)
          .onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === 'added') {
                commit('loading',false)
                payload.push(change.doc.data());
              }
            })
            commit('carousel',payload)
            })
    },
    Emoji({ commit }, payload) {
      commit("Emoji", payload);
    },
    IDs({ commit }, payload) {
      payload = firebase.auth().currentUser.uid;
      commit("ID", payload);
    },
    //Add Profile Information
    PROFILE({ commit }, payload) {
      var user = firebase.auth().currentUser;
      let crab = {
        name: payload.name,
        address: payload.address,
        age: payload.age,
        image: payload.image,
        stat: payload.stat,
        phone: payload.phone,
        job: payload.job,
        gender: payload.gender,
        id: user.uid
      };
      db.collection("Profile")
        .doc(user.uid)
        .set(crab)
        .then(ref => {
          // console.log('Added document with ID: ', ref.id);
        });
      commit("PROFILE", crab);
    },

    //Read Profile Info
    ViewProfiles({ commit }, payload) {
      var user = firebase.auth().currentUser;
      db.collection("Profile")
        .where("id", "==", user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            payload.push(doc.data());
            // commit("image", doc.data().image);
            // commit("name", doc.data().name);
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
      commit("ViewProfile", payload);
    },

    Images({ commit }, payload) {
      var user = firebase.auth().currentUser;

      db.collection("Memes")
        .add({
          images: payload
        })
        .then(ref => {
          console.log("Added document with ID: ", ref.id);
        });

      commit("Images", payload);
    },

    ViewImages({ commit }, payload) {
      commit('loading',true)
      var crab = [];
      var observer = db
        .collection("Memes")
        // .orderBy("time")
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              commit('loading',false)
              crab.push(change.doc.data());
            }
          });

          commit("gallery", crab);
        });
    },
    //Users
    Users({ commit }, users) {
      db.collection("users")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // this.id.push(doc.id)
            users.push(doc.data());
          });
        });

      commit("USERS", users);
    }
  },

  getters: {
    Categories(state) {
      return state.categories.sort((catA, catB) => {
        return catA.name > catB.name;
      });
    },
    try(state) {
      return state.RouteModule.params.id;
    },
    loading(state){
      return state.loading
    }
  }
});
