<template>

</template>

<script>
export default {
  name: "new",
  data(){
    return{
      crabs:[]
    }
  },

  methods:{
    closeMenu(){
      $(".page-wrapper").toggleClass("toggled");

    }
  },
  created(){
    this.$store.dispatch('ViewProfiles',this.crabs)
  }


}
</script>

<style scoped>
  i{margin-right: 8px;
    font-size: 1.5em;
    margin-top: 5px;

  }
  span{margin-left: 20px}
</style>
