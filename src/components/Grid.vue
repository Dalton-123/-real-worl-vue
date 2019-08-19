<template>

    <div class="">
        <h3>Explore</h3>


        <div class="uk-width-small uk-margin uk-align-center"><pro></pro></div>
        <div class="uk-width-small uk-margin uk-align-center"><sidebar></sidebar></div>
        <hr>
        <div class="uk-width-small uk-margin uk-align-center"><notification></notification></div>
        <hr>
        <div class="uk-width-small uk-margin uk-align-center"><requests></requests></div>
        <hr>



        <div class="uk-width-small uk-margin uk-align-center"><i class="fas fa-user-tie">Profile</i></div>

        <div class="uk-width-small uk-margin uk-align-center"><upload></upload></div>
        <hr>

    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    export default {
        name: "Grid",
        components: {
            cor,
    }}
</script>

<style scoped>
i{
    font-size: 20px;
    color: black;
}

</style>
