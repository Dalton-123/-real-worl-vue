<template>
  <div class="test" >
    <div v-for="image in images" class=" ">
      <div class="  uk-child-width-1-2@s " uk-grid>
        <div class="uk-card-media-left uk-cover-container uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
          <img
            :src="image.image"
            alt=""
            uk-cover
            @click="Goto(image.time)"

          />
          <div class="uk-position-center">
            <div class="uk-transition-slide-top-small"><h4 class="uk-margin-remove">Meme</h4></div>
            <div class="uk-transition-slide-bottom-small"><h4 class="uk-margin-remove">Galleries</h4></div>
          </div>
        </div>
<!--        <p class="uk-margin-small-top">Small Top + Bottom</p>-->
        <div>
          <div class="uk-card-body ">
            <h3 class="uk-card-title">{{ image.message }}</h3>
            <p class=''>Lorem ipsum dolor sit amet, consectetur .</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "sidegallery",
  props: ["ids"],
  data() {
    return {};
  },
  methods: {
    Goto(id) {
      this.$router.push({ name: "GetStarted", params: { id: id } });
      window.location.reload();
    }
  },
  computed: {
    images() {
      return this.$store.state.Gallery;
    }
  },
  created() {
    this.$store.dispatch("ViewImages");
  }
};
</script>

<style scoped>
.test {
  /*padding-top: 20px;*/
  padding-right: 70px;
  padding-top: 0px;




}
img{

max-width: 100%;
 /*width: 100px;*/
    max-height: 70%;
}
  p{width: 160px}
  h4 {
    color: white;
    font-size: 20px;
  }
</style>
