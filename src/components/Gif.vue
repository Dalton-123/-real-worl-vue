<template>
<div style="background-color: #0a2b4e">
  <section class=" uk-container">

    <!--Search-->
<div class="" >
  <h2>Search</h2>
  <input style="margin-left: 4px" type="text" placeholder="search for Gifs" v-model="find"><button @click="findGifs">Find</button>
</div>





    <!-- trending -->
    <h2 class="">Trending</h2>
    <div class="" v-if="Gifs">
      <div class="" v-for="gif in Gifs">
        <!-- the gif box -->
        <div class="gif-box">
          <!-- gif image and link -->
          <a :href="gif.url" style="float: left" class="p-3">
            <img class="gif-image" :src="gif.images.original.url" />
          </a>

          <!-- gifs author -->
          <!--          <a class="gif-user" v-if="gif.user" :href="gif.user.profile_url">-->
          <!--            <img :src="gif.user.avatar_url" height="40" width="40" />-->
          <!--            <span>{{ gif.user.display_name }}</span>-->
          <!--          </a>-->
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Gif",
  data() {
    return {
      Gifs: [],
      find:null
    };
  },
  methods:{
    findGifs(find){

      fetch(
              `http://api.giphy.com/v1/gifs/search?q=${this.find}&api_key=9iOmsltUZqHU8BHgLkICDIJEkkqm7V1f`
      )
              .then(res => {
                return res.json();
              })
              .then(res => {
                this.Gifs = res.data;
                console.log(res.data);
              });
    }
  },
  created() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=9iOmsltUZqHU8BHgLkICDIJEkkqm7V1f"
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.Gifs = res.data;
        console.log(res.data);
      });
  }
};
</script>

<style scoped>
.gif-box {
  position: relative;
}
.gif-user {
  display: flex;
  align-items: center;
  position: absolute;
  left: 15px;
  bottom: 15px;
}
.gif-user img {
  margin-right: 8px;
  height: 40px;
  width: 40px;
}

  h2{
    color: wheat;
  }
  .uk-container{
    padding-top: 150px;
  }
</style>
