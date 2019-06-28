<template>
  <div class="login">
    <div>
      <!--BUTTON FOR CHAT   -->
      <div uk-lightbox>
        <a  style="margin-left: 100px" href="https://www.youtube.com/watch?v=c2pz2mlSfXA" data-caption="YouTube"><i class="fas fa-video" uk-tooltip="title: Watch Video; pos: bottom"></i></a>
      </div>
      <router-link to="/chat"
                   style="margin-left: 400px;background: #0a2b4e;"
                   class="waves-effect waves-light btn-small"
      ><p style="color:white" class="uk-text-center">Chat</p></router-link
      >
      <!--    THE OTHER BUTTON        -->

      <router-link to="/user"
        style="margin-left: 300px;background: white;color: #0a2b4e"
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
  i{
    color:orangered;
    font-size: 1.9em;

  }
</style>
