<template>
    <div >

        <div>
            <navbar></navbar>
        </div>

        <div  class="uk-section uk-section-muted uk-margin-remove">
            <timestamp></timestamp>
            <topMemes></topMemes>
            <div class="uk-grid-divider uk-child-width-expand@l " uk-grid >
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div> <cor></cor></div>
                <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </div>
        </div>






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
        /*background-image: url("../../../public/space.jpg") ;*/
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
