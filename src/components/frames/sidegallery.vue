<template>
<div>
    <div v-for="image in images" class="test ">
        <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img :src="image.image" alt="" uk-cover @click="Goto(image.message)">
                <canvas width="400" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Left</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur .</p>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
    export default {
        name: "sidegallery",
        props:['ids'],
        data(){
            return{

            }
        },
        methods:{
          Goto(id){
              this.$router.push({name:'GetStarted',params:{id:id}})
              window.location.reload()
          }
        },
        computed:{
            images(){
                return this.$store.state.Gallery
            }
        },
        created() {
            this.$store.dispatch('ViewImages')

        }
    }
</script>

<style scoped>
.test{
padding-top: 20px;
    padding-right: 20px;

}
img{


}
</style>
