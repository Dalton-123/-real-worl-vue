<template>
    <div>
        <div v-for="image in images" class="p-1">
            <img :src="image.image" alt="">
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    export default {
        name: "timestamp",
        data(){
          return{
              images:[]
          }
        },
        created(){
            var startTime=1564002303315;
            var endTime=1563921758067;

            db.collection('Memes').orderBy('timestamp').startAt(endTime).endAt(startTime)
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {

                            this.images.push(change.doc.data())
                        }

                    });
                });
        }
    }
</script>

<style lang="scss" >
img{
    width: 200px;
    height: 200px;
}

</style>
