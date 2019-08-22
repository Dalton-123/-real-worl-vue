<template>

    <div class="">
        <h3 class="uk-text-center">Explore</h3>

        <div class=" uk-margin uk-align-center "><pro></pro></div>
        <div class="first  uk-margin uk-align-center"><sidebar></sidebar></div>

        <div class=" uk-width-small  uk-margin uk-align-center"><notification></notification></div>

        <div class="uk-width-small uk-margin uk-align-center"><requests></requests></div>
        <div class="uk-width-small uk-margin uk-align-center me"><img :src=" '/' + images " alt=""><span class="uk-text-bold" style="margin-left: 19px">Profile</span></div>
        <div class="uk-width-small uk-margin uk-align-center"><upload></upload></div>


    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    export default {
        name: "Grid",
        components: {
            cor,
    },
        data(){
            return{
                images:'user.svg'
            }
        }

    }
</script>

<style scoped>
i{
    font-size: 20px;
    color: black;
}
.uk-width-small{
    margin-top: 20px;
}

.uk-width-small div:hover{
    background-color: white;
    padding:10px;
    border-radius: 10px;
    width: 100%;
    opacity: 0.5;
}.me:hover{
    background-color: white;
    padding:10px;

     width: 100%;opacity: 0.5;
}
.first
{
    background-color:white;
    padding:10px;
    border-radius: 10px;opacity: 0.5;
}
    img{
        width:30px;
        height: 30px;
    }
</style>
