<template>
    <nav class="uk-navbar-container" uk-navbar>

        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
               <li><div class="uk-margin">
                   <form class="uk-search uk-search-default">
                       <span uk-search-icon></span>
                       <input class="uk-search-input" type="search" placeholder="Search...">
                   </form>
               </div></li>
            </ul>

        </div>

        <div class="uk-navbar-right">

            <ul class="uk-navbar-nav">
                <li><topMemes></topMemes></li>
                <li ><upload></upload></li>
               <li><p style="color: blue;font-size: 1.1em" class="uk-margin-small-right" uk-icon="grid"></p></li>
                <li><pro></pro></li>

            </ul>

        </div>

    </nav>
</template>

<script>
    import upload from '@/views/UploadImages'
    export default {
        name: "banner",
        components:{upload},
    }
</script>

<style scoped>
.test{
    margin-top: 0px;
    background-color: #0a2b4e;
    border-bottom: 1px solid orangered;

}
    h3{margin-left: 400px;
    color: white}

nav{
    margin-top: 0%;
    background-color: white;
}
.uk-navbar-container{
    margin-top: 0px;background-color: white;
}
li{
    margin-right: 15px;
}
</style>
