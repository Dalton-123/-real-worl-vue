<template>
  <div>
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <span id="show-sidebar" @click="closeMenu" style="margin-left: 10px;font-size: 20px"  href="#" >
       <i class="fa fa-bars"></i>
      </span>

      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <router-link to="/"><i class="fa fa-home" style="font-size: 1.9em"></i></router-link>
           <div id="close-sidebar" @click="closeMenu">
             <i class="fa fa-times-rectangle-o"></i>
           </div>

          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">

            <div class="">

             <div v-for="crab in crabs">
               <span style="margin-left: 0px" class="user-name row">
               <div class="col">
                 <img class="uk-border-circle" width="40" height="40" :src="crab.image">
               </div>

               <span> {{crab.name}}</span>
              </span>


               <span class="user-role"><i class="fa fa-briefcase"></i>{{crab.job}}</span>
             </div>
              <span class="user-status">
                <i style="color:green" class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>
          <!-- sidebar-search  -->

          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>General</span>
              </li>
              <li class="">
                <a href="#">
                  <i class="fa fa-tachometer-alt"></i>
                  <router-link to="/profile" class="menu-text">View Profile</router-link>
                </a>

              </li>

              <li class="">
                <a href="#">
                  <i class="far fa-gem"></i>
                  <router-link to="/user" class="menu-text">Create Profile</router-link>
                </a>

              </li>
              <li class="">
                <a href="#">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">Add to cart</span>

                </a>

              </li>
              <li class="">
                <a href="#">
                  <i class="material-icons">broken_image</i>
                  <router-link to="/gallery" class="menu-text">Gallery</router-link>

                </a>

              </li>


            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->

      </nav>
<main class="page-content pt-2">
 <router-view />
</main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
export default {
  name: "new",
  data(){
    return{
      crabs:[]
    }
  },

  methods:{
    closeMenu(){
      $(".page-wrapper").toggleClass("toggled");

    }
  },
  created(){
    this.$store.dispatch('ViewProfiles',this.crabs)
  }


}
</script>

<style scoped>
  i{margin-right: 8px;
    font-size: 1.5em;
    margin-top: 5px;

  }
  span{margin-left: 20px}
</style>
