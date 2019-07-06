<template>
  <div class="test" >

      <div>
          <div v-if="loading"> <loader></loader></div>
          <div v-for="image in images">
              <div class="d-flex">
                  <img :src="image.image" alt="" class="p-1"  @click="Goto(image.Meme_id)">
                  <div style="info"> <div class="uk-width-expand">
                      <p class="uk-card-title uk-margin-remove-bottom">{{image.title}}</p>
                      <p class="uk-text-meta uk-margin-remove-top">{{image.description}} ... </p>
                  </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
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
      ...mapGetters(["loading"]),
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
  margin-top: 25px;
    /*background-image: url("https://cdn.pixabay.com/photo/2019/04/27/08/29/forest-4159500__340.jpg");*/
    /*background-position: center;*/
    /*background-repeat: no-repeat;*/
    /*background-size: cover;*/
    /*opacity: 0.9;*/
    /*overflow-scrolling: auto;*/

    /*width: 250px;*/





}
img{

max-width: 100%;

    max-height: 70%;
  width:150px;
  height: 100px;
}


</style>
