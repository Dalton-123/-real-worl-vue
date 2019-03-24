<template>
  <div id="app">
    <navbar></navbar>

    <router-view />
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

</style>
