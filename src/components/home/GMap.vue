<template>
    <div class="map testStep1">
        <div class="google-map" id="map"></div>

        <but></but>
        <cor></cor>
    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    import but from '@/components/frames/buttons'
    export default {
        name: "GMap",
        components:{
            cor,but
        },
        data() {
            return {}
        }

    }
</script>

<style scoped>
    .testStep1{
        background-image: url('../../../public/space.jpg');
        width: 1500px;
        height: 1000px;
       margin-top: 0px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
    }
</style>
