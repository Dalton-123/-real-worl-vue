<template>
<div>
    <div >
        <img :src="meetus.image" alt="">
    </div>
</div>
</template>

<script>
    export default {
        name: "GetStarted",
        data(){
          return{
              messages:[],
              id:this.$attrs.id

          }
        },
        computed: {

            meetus () {
                 return this.$store.getters.loadedMeetup().find(map=>map.time==this.id)
            },



    },
        created(){
            this.$store.dispatch('ViewImages',this.messages)
        }
    }
</script>

<style scoped>

</style>
