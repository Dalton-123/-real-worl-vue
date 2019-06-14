<template>
    <div>
        <div   class="uk-position-relative uk-visible-toggle uk-light login" tabindex="-1" uk-slideshow>

           <div>
               <ul class="uk-slideshow-items">
                   <li v-for="image in  images" >
                       <router-link :to="'/start/' + image.time"><img :src="image.image" alt="" ></router-link>
                   </li>



               </ul>
           </div>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
</template>

<script>

    export default {
        name: "corousel",
        data(){
            return {
                images:[]
            }
        },
        computed:{
            Photos(){
                return this.images.map(map=>{
                    return map.image
                })
            }
        },






        created(){
            this.$store.dispatch('ViewImages',this.images)
        }

    }
</script>

<style scoped>

.login {
    max-width: 50%;
    margin-top: 10px;
    margin-left: 350px;
    max-height: 100%!important;
}
    img{
        width:1800px;
        max-height: 400px;
    }
</style>
