<template>
  <div>
    <a class="" type="" uk-toggle="target: #offcanvas-flip"
      ><i class="fa fa-users">users</i></a
    >

    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3 class="uk-text-center">Users</h3>
        <div v-for="use in users" class="me">
          <a href=""
            ><router-link :to='"/profile/" + use.alias'
              ><i style="color:green" class="fa fa-circle"></i
              ><span>{{ use.alias }}</span></router-link
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "sidebar",

  data() {
    return {
      users: [],
      id: []
    };
  },
  // methods:{
  //     profile(id){
  //      this.$router.push({name:'profile'})
  //     }
  // },
  created() {
    this.$store.dispatch("Users", this.users);
  },
  methods: {
    Reload() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
#sidebar {
  /*height: 100%;*/

  float: left;
  position: fixed;
}
.sidebar {
  width: 100px;
  height: 107%;
  margin: 0;
}
#sidebar {
  background: black;
  width: 25%;
  /*margin-bottom: -4px;*/
  /*bottom: -5;*/
}
.test {
}

.me {
  overflow: auto;
  max-height: 500px;
}
.uk-inline {
  background: #0a2b4e;
}

i {
  margin-right: 5px;
  font-size: 1.2em;
  color: orangered;
}
a {
  color: orangered;
  font-size: 1.2em;
}
</style>
