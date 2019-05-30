<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <foot></foot>
  </div>
</template>
<script>
  // import welcome from '@/components/Welcome'
  import navbar from '@/views/layouts/NavBar'

  export default {

    components:{
        // welcome,
navbar
    }
  }
</script>



<style>
/*body{*/
/*  background-color: #ddd;*/
/*}*/
</style>
