<template>
  <div class="uk-container uk-container-small ">
    <div>
      <topMemes></topMemes>
    </div>
    <div v-if="loading"><loader></loader></div>

    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 3000;"
    >
      <ul class="uk-slideshow-items">
        <li v-for="image in images">
          <router-link :to="'/start/' + image.Meme_id"
            ><img :src="image.image"
          /></router-link>
          <div
            style="opacity: 0.9"
            class="uk-overlay uk-overlay-primary uk-position-right uk-transition-slide-right uk-width-medium"
          >
            <p class="uk-margin-remove">Title: {{ image.title }}</p>
            <p class="uk-margin-remove">Author: {{ image.name[0] }}</p>
            <p class="uk-margin-remove">
              Description: {{ image.description }}.
            </p>
            <p class="uk-margin-remove">Category: {{ image.category }}</p>
            <p
              class="uk-margin-remove btn btn-secondary"
              @mouseover="messages(image.Meme_id)"
            >
              View Comments<span uk-icon="icon: triangle-down"></span>
            </p>
          </div>
        </li>
      </ul>

      <a
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slideshow-item="previous"
      ></a>
      <a
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slideshow-item="next"
      ></a>
    </div>
    <div style="max-height: 500px;overflow: auto"
      uk-dropdown="pos: right-center animation: uk-animation-slide-top-small; duration: 1000"
    >
      <div v-if="comments.length != 0">
        <h3 v-if="comments.length > 1">{{ comments.length }} Comments</h3>
        <h3 v-if="comments.length == 1">{{ comments.length }} Comment</h3>
        <span class="fa fa-thumbs-up"> {{likes.length}}</span>
        <span class="fa fa-thumbs-down" style="margin-left: 18px"> {{dislikes.length}}</span>
        <hr />

        <article
          class="uk-comment"
          v-for="message in comments"
          :key="message.time"
        >
          <header
            class="uk-comment-header uk-grid-medium uk-flex-middle"
            uk-grid
          >
            <div class="uk-width-auto ">
              <img class="uk-border-circle" :src="message.pic" alt="" />
            </div>
            <div class="uk-width-expand">
              <h4 class="uk-comment-title uk-margin-remove">
                <a class="uk-link-reset" href="#">{{ message.name }}</a>
              </h4>
            </div>
          </header>
          <div class="uk-comment-body uk-margin-remove">
            <p>
              <i style="" class="fas fa-comment-dots"></i>{{ message.message }}
            </p>
            <p style="margin-left: 4px" v-for="emoji in message.emoji">
              {{ emoji }}
            </p>
          </div>
          <div class="first me">
            <img :src="message.image" alt="" height="100px" width="100px" />
          </div>
        </article>
      </div>
      <div v-else>
        <h3>No Comments</h3>
        <span style="font-size:100px;">&#128577;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "corousel",
  data() {
    return {
      images: [],
      cat: "",
      user: firebase.auth().currentUser.uid,
      chosen: this.$route.params.id,
      comments: [],
      likes:[],
      dislikes: [],
      id: firebase.auth().currentUser.uid,
    };
  },
  computed: {
    ...mapGetters(["loading"]),
    categories() {
      return this.$store.getters.Categories;
    }
  },

  methods: {
    messages(id) {
      this.comments = [];
      this.likes=[],
      this.dislikes=[]
      db.collection("message")
        .where("Meme_id", "==", id)
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              this.comments.push(change.doc.data());
            }
          });
        });db.collection("likes")
        .where("Meme_id", "==", id)
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              this.likes.push(change.doc.data());
            }
          });
        });db.collection("dislikes")
        .where("Meme_id", "==", id)
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              this.dislikes.push(change.doc.data());
            }
          });
        });
    }
  },

  created() {
    this.$store.dispatch("carousel", this.images);
    this.messages;
  }
};
</script>

<style scoped>
.login {
  max-width: 70%;
  margin-top: 10px;
  margin-left: 160px;
  max-height: 100% !important;
}
.uk-slideshow-items img {
  width: 900px;
  height: 900px;
  max-height: 100% !important;
  /*height:400px !important;*/
  border: 4px solid white;
}
.uk-dropdown-nav {
  width: 500px;
}
.rcorners {
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 400px;
  height: 115px;
  color: black;
}
.tests {
  color: blue;
  font-size: 0.7em;
}
.col {
  color: white;
}

.first {
  margin-left: 6%;
}
.me {
  margin-left: 76%;
}
i {
  margin-right: 15px;
  font-size: 1.1em;
  margin-top: 5px;
  color: palevioletred;
}

a {
  font-size: 1.1em;
}
.fa fa-thumbs-up {
  color: blue;
}
.uk-width-auto img {
  width: 45px;
  max-height: 45px;
}
.uk-comment-body p {
  display: inline-block;
}
  .uk-width-medium p{
    padding-bottom: 15px;
  }
</style>
