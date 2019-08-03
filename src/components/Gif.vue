<template>
    <div>
        <div v-for="gif in Gifs">
            <img :src="gif.images.fixed_height.url" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gif",
        data(){
          return {
              Gifs:[]
          }
        },
        created(){
            fetch("http://api.giphy.com/v1/gifs/trending?api_key=9iOmsltUZqHU8BHgLkICDIJEkkqm7V1f")
                .then((res)=>{return res.json()}).
            then((res)=>{this.Gifs= res.data})
        }
    }
</script>

<style scoped>

</style>
