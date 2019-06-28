<template>
   <div>
       <div v-for="crab in crabs">
           <div class="d-flex">
               <img
                       class="uk-border-circle"

                       :src="crab.image"
               />
<!--               <span> {{ crab.name }}</span>-->
           </div>

       </div>
   </div>
</template>

<script>
    export default {
        name: "pro",
        data(){
          return{
              crabs:[]
          }
        },
        created() {
            this.$store.dispatch("ViewProfiles", this.crabs);
        },
    }
</script>

<style scoped>
img{width: 40px;height: 40px}
</style>
