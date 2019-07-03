<template>
<div>
<!--    <input type="text" v-model="test" style="display:none">-->
<!--    <div >-->
<!--        <div v-for="te in test" class="">-->
<!--            <p id="wrong-test">{{te}}</p>-->
<!--        </div>-->
<!--    </div>-->
    <div id="app">
        <VEmojiPicker :pack="pack" @select="selectEmoji" />
    </div>
</div>
</template>

<script>
    import VEmojiPicker from 'v-emoji-picker';
    import packData from 'v-emoji-picker/data/emojis.json';
export default {
  name: "new",
    components: {
        VEmojiPicker
    },
  data(){
    return{
        test:[],
        pack: packData
    }
  },
computed:{
      Emojis(){
          return this.pack.map(map=>{
              return map.emoji
          })
      }
},

  methods:{
      selectEmoji(emoji) {
          var emojis=emoji.emoji
         this.$store.dispatch('Emoji',emojis)

      }
  },



}
</script>

<style scoped>
  i{margin-right: 8px;
    font-size: 1.5em;
    margin-top: 5px;

  }
  p#wrong-test {
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      display: inline-block;
  }


  img.emojione {
  margin: 0px !important;
      display: inline !important;

      height: auto;
      width: 50px;
  }
</style>
