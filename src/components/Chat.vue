<template>
    <div>

<!--        <sidebar :name="name">  </sidebar>-->
        <Message :name="name"></Message>



    </div>
</template>


<script>

    import Message from "@/messages/Messages"

    export default{
        name:'chat',
        props:['name'],
        components:{
            // sidebar,
            Message
        },
        data(){
            return{

            }
        }


    }


</script>
