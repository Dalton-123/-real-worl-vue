<template>
   <div style="background-color: #0a2b4e">
       <div class="uk-position-relative">
           <nav class="uk-navbar-container " uk-navbar  style="background-color: #0a2b4e">

           <div class="uk-navbar-left container uk-text-center">

               <ul class="uk-navbar-nav ">
                   <li><div class="uk-margin">
                       <form class="uk-search uk-search-default uk-container uk-container-small">
                           <input class="uk-search-input" type="search" placeholder="Search..." style="border: 1px solid black;border-radius: 10px;background-color: white;margin: 4px">
                       </form>
                   </div></li>
               </ul>

           </div>

           <div class="uk-navbar-right">

               <ul class="uk-navbar-nav">

                   <li ><upload></upload></li>
                   <li style="color: blue" @click=" home"><i class="fa fa-home" style="font-size: 30px"></i></li>
                   <li><pro></pro></li>

               </ul>

           </div>

           </nav>
       </div>
   </div>
</template>

<script>
    import upload from '@/views/UploadImages'
    export default {
        name: "banner",
        components:{upload},
        methods:{
            home() {
                this.$router.push({ name: "GMap", params: { id: "Animated" } });
            },
        }
    }
</script>

<style scoped>
.test{
    margin-top: 0px;
    background-color: #0a2b4e;
    border-bottom: 1px solid orangered;

}
    h3{margin-left: 400px;
    color: white}

nav{
    margin-top: 0%;
    background-color: white;
}
.uk-navbar-container{
    margin-top: 0px;background-color: white;
}
li{
    margin-right: 15px;
}
</style>
