<template>
<div classk="container-fluid">

    <div class="row">
        <div class="col-md-7">
            <img :src="gallery.image" alt="">

            <chat :ids="ids"></chat>
        </div>
       <div class="col">
           <sidegal :ids="ids"></sidegal>
       </div>
    </div>
</div>
</template>

<script>
    import chat from '@/components/Chat'
    export default {
        name: "GetStarted",
        components:{
            chat
        },

        data(){
          return{
              messages:[],
              ids:this.$route.params.id,


          }
        },
        computed: {

            gallery() {
                return this.$store.getters.loadedGallery(this.ids)
            }



    },
        created(){
            this.$store.dispatch('ViewImages')

        }
    }
</script>

<style scoped>
img{

    padding: 20px;
    max-height: 500px;
    width: 100%;
}
</style>
