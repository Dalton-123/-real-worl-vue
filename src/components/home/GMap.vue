<template>
    <div class=" testStep1">
        <banner></banner>
<p class="uk-container test uk-text-center">Muscle Crab Diversities is a Jamaican owned company that provides the planet a taste of caribbean culture daily.  Subscribe today to receive your daily Meme.</p>
        <but :alias="alias"></but>
        <cor></cor>
        <br><br><br><br><br>
<!--        <foot></foot>-->
    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    import but from '@/components/frames/buttons'
    import banner from '@/views/layouts/banner'

    export default {
        name: "GMap",
        props:['alias'],
        components:{
            cor,but,banner,
        },
        data() {
            return {}
        }

    }
</script>

<style scoped>
    .testStep1{
        background-image: url("../../../public/space.jpg") ;
        width: 1500px;
        height: 1000px;
       margin-top: auto;
        padding-top: 0px;
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
</style>
