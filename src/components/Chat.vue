<template>
    <div>

<!--        <sidebar :name="name">  </sidebar>-->
        <Message :ids="ids"></Message>



    </div>
</template>


<script>

    import Message from "@/messages/Messages"

    export default{
        name:'chat',
        props:['ids'],
        components:{
            // sidebar,
            Message
        },
        data(){
            return{
id:this.ids
            }
        }


    }


</script>
