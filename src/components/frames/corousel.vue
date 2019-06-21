<template>
    <div>
        <div   class=" uk-position-relative uk-visible-toggle uk-light login" tabindex="-1"  uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 9000;">

           <div>
               <ul class="uk-slideshow-items">
                   <li v-for="image in  images" >
                     <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                         <router-link :to="'/start/' + image.message"><img :src="image.image" alt="" ></router-link>
                     </div>

                   </li>



               </ul>
           </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
</template>

<script>
    import UIkit from "uikit";
    export default {

        name: "corousel",
        data(){
            return {
                image:[]
            }
        },
        computed:{
            images(){
                return this.$store.state.Gallery
            }
        },






        created(){
            this.$store.dispatch('ViewImages')

        },
mounted(){
    UIkit.slideshow('uk-slideshow').startAutoplay();
}
    }
</script>

<style scoped>

.login {
    max-width: 50%;
    margin-top: 10px;
    margin-left: 350px;
    max-height: 100%!important;
    border: 4px solid white;
}
    img{
        width:1800px;
        max-height: 100%!important;
        height:400px !important;
    }
</style>
