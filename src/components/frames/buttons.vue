<template>
  <div class="login">
    <div>
      <!--BUTTON FOR CHAT   -->
      <router-link to="/chat"
                   style="margin-left: 310px;background: #0a2b4e;"
                   class="waves-effect waves-light btn-small"
      ><p style="color:white" class="uk-text-center">Chat</p></router-link
      >
      <!--    THE OTHER BUTTON        -->
      <router-link to="/user"
        style="margin-left: 450px;background: white;color: #0a2b4e"
        class="waves-effect waves-light btn-small"
        ><p style="color:#0a2b4e" class="row">Get Started</p></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "buttons",
  data() {
    return {
      name: "",
      error: ""
    };
  },
  methods: {
    Enter() {
      if (this.name) {
        this.$router.push({ name: "chat", params: { name: this.name } });
      } else {
        this.error = "Please enter your name";
      }
    }
  }
};
</script>

<style scoped>
.login {
  /*max-width: 40%;*/
  margin-top: 20px;
}
a {
  height: 60px;
  width: 150px;
  font-size: 20px;
}
p {
  color: white;
}
</style>
