<template>
  <div class="login">
    <div>
      <!--BUTTON FOR CHAT   -->
      <a
        style="margin-left: 350px;background: #0a2b4e;"
        class="waves-effect waves-light btn-small"
        href="#modal-center"
        uk-toggle
      >
        <i class="material-icons left;">cloud</i>Chat</a
      >
      <div id="modal-center" class="uk-flex-top" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          ></button>
          <h2 class="uk-text-center">Text you name to enter Chat</h2>
          <div>
            <label for="name">Name</label>
            <input type="text" v-model="name" />
            <p class="uk-text-center" v-if="error">{{ error }}</p>
            <button
              @click="Enter"
              class=" uk-modal-close uk-button uk-button-secondary"
            >
              send
            </button>
          </div>
        </div>
      </div>

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
  color: red;
}
</style>
