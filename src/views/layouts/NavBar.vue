<template>
  <div class="navbar">
    <nav class="test">
      <div class="container left">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmrga1rLMfSbwLGHoNXhwMcS__9vHP3JXq0JY74jaUEFyXLza"
            style="width: 100px;padding-left: 50px"
            alt=""
          />
          Meme Galleries</router-link
        >
      </div>
      <div>
        <ul class="right">
          <li v-if="user">
            <router-link to="/about"
            ><span class="tests" uk-icon="users"></span>About</router-link
            >
          </li>
          <li v-if="!user">
            <router-link to="/signup"
              ><span class="tests" uk-icon="sign-in"></span>Signup</router-link
            >
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'login' }"
              ><span class="tests" uk-icon="unlock"></span>Login</router-link
            >
          </li>
          <li v-if="user">
            <a href=""><span class="tests" uk-icon="cart"></span>cart</a>
          </li>
          <li v-if="user">
            <span class="tests" uk-icon="user"></span>{{ user.email }}
          </li>
          <li v-if="user">
            <a href="" @click="logout"
              ><span class="tests" uk-icon="sign-out"></span>logout</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";



export default {
  name: "NavBar",
  data() {
    return {
      user: null,
      password: ""
    };
  },
  computed: {
    ...mapGetters(["CurrentUser"])

  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser=""
          this.$router.push("/login")
        });
    },
    setUser() {
      this.$store.dispatch("set_user", { payload: "kjfldsjkdf" });

    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      } else {
        this.user = user
      }
    });

  }
};
</script>

<style scoped>
.test {
  background: #0a2b4e;
}

.tests {
  width: 30px;
}
</style>
