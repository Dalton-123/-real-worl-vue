<template>
  <form action="#">
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Brown</span>
      </label>
    </p>

    <p>
      <select class="browser-default"  v-model="cat" >

        <option  @click="press"  v-for="(cat,index) in categories" :key="index">{{cat.name}}</option>


      </select>

    </p>
      <p></p>
  </form>
</template>

<script>
export default {
  name: "topMemes",
  data() {
    return {
        cat:""
    };
  },
  computed: {
    categories() {
      return this.$store.getters.Categories;
    }
  },
    methods:{
      press(){
          this.$store.dispatch('selectedCategory',this.cat)
      }
    },
    created() {


  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
div {
  background: white;
}
p {
  display: inline-block;
  padding-right: 60px;
}
</style>
