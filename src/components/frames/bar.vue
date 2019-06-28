<template>
  <div v-if="this.$route.path!='/'">

    <div class="me"><a href="#offcanvas-usage" uk-toggle><i class="fa fa-navicon"></i></a></div>

    <div id="offcanvas-usage" uk-offcanvas="bg-close:false">
      <div class="uk-offcanvas-bar test" >
<!--        <div class="d-flex">-->
         <router-link to="/"> <i style="margin-top: 0%" class="fa fa-home me"></i></router-link>
<!--          <a class="uk-offcanvas-close" type="">-->
<!--            <i style="font-size:24px;padding-top: 12px" class="fa">&#xf00d;</i></a>-->
<!--        </div>-->
          <hr>
        <div v-for="crab in crabs">
        <hr />
          <div class="first">
            <p class="user-role">
              <i class="fa fa-briefcase"></i>{{ crab.job }}
            </p>
          </div>
          <span class="user-status">
            <i style="color:green" class="fa fa-circle"></i>
            <span>Online</span>
          </span>

         <div class="last">
             <ul >

                 <li class="tests">
                     <a href="#">
                         <i class="fa fa-tachometer-alt"></i>
                         <router-link to="/profile" class="menu-text"
                         ><span>View Profile</span></router-link
                         >
                     </a>
                 </li>

                 <li class="tests ">
                     <a href="#" >
                         <i class="far fa-gem"></i>
                         <router-link to="/user" class="menu-text"
                         ><span class="">Create Profile</span></router-link
                         >
                     </a>
                 </li>
                 <li class="tests">
                     <a href="#">
                         <i class="fa fa-shopping-cart"></i>
                         <span class="menu-text">Add to cart</span>
                     </a>
                 </li>
                 <li class="tests">
                     <a href="#">
                         <i class="material-icons">broken_image</i>
                         <router-link to="/gallery" class="menu-text"
                         ><span>Gallery</span></router-link
                         >
                     </a>
                 </li>
             </ul>

         </div>

        </div>

      </div>


    </div>
      <div class="main">
          <router-view />
      </div>
  </div>
</template>

<script>
    import UIkit from "uikit";
export default {
  name: "mainPage",
  data() {
    return {
      crabs: []
    };
  },
    methods:{

    },
  created() {
    this.$store.dispatch("ViewProfiles", this.crabs);
  },
    mounted(){
        UIkit.offcanvas('#offcanvas-usage').show();

    }
};
</script>

<style scoped>
.test {
  background-color: white;
  opacity: 0.9;
    overflow-scrolling: auto;

  width: 250px;
}
i {

  font-size: 25px;
  color: orangered;
  /*margin-top: 5px;*/
  margin-right: 8px;
    /*border: 1px solid black;*/
    padding: 3px;
    /*background: black;*/
    opacity: 0.8;
}
.d-flex span {
  margin-left: 10px;
  font-size: 16px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
}
img {
  width: 60px;
  height: 60px;
}
.first p {
  margin-top: 30px;

  font-size: 16px;
  color: black;
}
  .last  li{
        margin-top: 30px;
      margin-right: 4px;
      padding: 5px;
    }

    .last span{
        margin-right: 10px;
    }

    .me  i{
        border: none;
        background: none;
    }
    .uk-offcanvas-close i{
        border: none;
        background: none;
    }
::-webkit-scrollbar {
    width: 10px;
}
.me{
    border: none;
    background: none;
}
.main {
    margin-left: 250px; /* Same as the width of the sidenav */
    height: 700px;
    overflow: auto;
}
span{color: black}
</style>
