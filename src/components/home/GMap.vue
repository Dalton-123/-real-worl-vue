<template>
    <div id="offcanvas-usage" class="uk-background-fixed testStep1 first" style="background-color: rgb(204,255,225)">
        <div>
            <router-view /></div>
        <div>
            <navbar></navbar>
        </div>
<p class="uk-container test uk-text-center">Muscle Crab Diversities is a Jamaican owned company that provides the planet a taste of caribbean culture daily.  Subscribe today to receive your daily Meme.</p>
        <but :alias="alias"></but>
        <cor></cor>
        <br><br><br><br><br>

        <br><br>
        <about></about>


    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    import but from '@/components/frames/buttons'
    import about from '@/components/pages/about'



    export default {
        name: "GMap",
        props: ['alias'],
        components: {
            cor, but, about
        },
        mounted() {
            // UIkit.offcanvas('#offcanvas-usage').show()
            // window.location.reload()

        },
        data() {
            return {

            }
        },
        created(){
          this.$store.dispatch('IDs')

        }
    }
</script>

<style scoped>
    .testStep1{
        background-image: url("../../../public/space.jpg") ;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        /*position: absolute;*/

    }
    .test{
        font-family:Source Sans Pro, sans-serif;
        color:#0a2b4e;
        font-size: 20px;
        font-weight: 600;
    }
    .first{
        background-color: rgba(201, 76, 76, 0.3);;
    }
</style>
