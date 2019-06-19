<template>
    <div>
        <forms :ids="ids"></forms><br> <br>
        <single-message :ids="ids"></single-message>


    </div>
</template>

<script>
    import SingleMessage from "./SingleMessage"
    import forms from "./MessageForm"
    // import database from 'firebase/database'
    export default {
        name: "Messages",
        props:['ids'],
        components: {SingleMessage,forms},


    }
</script>

<style scoped>

</style>
