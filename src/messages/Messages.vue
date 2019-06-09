<template>
    <div>
        <single-message></single-message>
        <br> <br>
        <forms></forms>
    </div>
</template>

<script>
    import SingleMessage from "./SingleMessage"
    import forms from "./MessageForm"
    // import database from 'firebase/database'
    export default {
        name: "Messages",
        props:['name'],
        components: {SingleMessage,forms},

    }
</script>

<style scoped>

</style>
