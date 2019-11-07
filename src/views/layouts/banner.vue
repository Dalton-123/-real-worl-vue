<template>
   <div style="">
       <div id="modal-full" class="uk-modal-full" uk-modal>
           <div class="uk-modal-dialog">
               <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                   <div class="uk-background-cover uk-container-small" style="background-image: url('crab.JPG');margin:60px" uk-height-viewport></div>
                   <div class="uk-padding-large ">
                       <h1>Headline</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import upload from '@/views/UploadImages'
    import UIkit from "uikit";
    export default {
        name: "banner",
        components:{upload},
        methods:{
            home() {
                this.$router.push({ name: "GMap", params: { id: "Animated" } });
            },
        },mounted(){
            UIkit.modal("#modal-full").show()
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
