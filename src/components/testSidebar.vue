<template>
<div class="sidebar">
    <div id="sidebar">
    </div>

</div>
</template>

<script>
    export default {
        name: "testSidebar"
    }
</script>

<style scoped>
    #sidebar, #content {
        height: 100%;

        float:left;

    }
    .sidebar  {
        width: 50%;
        height: 500px;
        margin: 0;
    }
    #sidebar {
        background:black;
        width: 30%;
    }

    #sidebar.collapsed {
        width: 0;
    }

    #sidebar.collapsed + #content {
        width: 50%;
    }

    #content {
        background:gray;
        width: 70%;
    }

    button {
        width: 30px;
        height: 30px;
        background: black;
    }
</style>
