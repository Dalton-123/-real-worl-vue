<template>
    <div>
        {{images.length}} count
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
            const TwoMonths = 1000 * 60 * 60 * 24 * 60
            var startTime= Date.now() - TwoMonths;


            db.collection('Memes').orderBy('counter','desc').startAt(startTime).limit(10)
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
