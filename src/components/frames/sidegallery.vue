<template>
  <div class="test" >


    <div v-for="image in images">
      <div class="d-flex">
        <img :src="image.image" alt="" class="p-1"  @click="Goto(image.Meme_id)">
       <div style="info" > <div class="uk-width-expand">
         <p class="uk-card-title uk-margin-remove-bottom">{{image.title}}</p>
         <p class="uk-text-meta uk-margin-remove-top">{{image.description|convert}} ... </p>
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
  padding-top: 25px;






}
img{

max-width: 100%;

    max-height: 70%;
  width:150px;
  height: 100px;
}


</style>
