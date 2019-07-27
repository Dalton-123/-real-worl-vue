<template>
  <div>
    <a class="" type="" uk-toggle="target: #offcanvas"
      ><i class="fa fa-users" style="color: orangered">users</i></a
    >

    <div id="offcanvas" uk-offcanvas="flip:false; overlay: true">
      <div class="uk-offcanvas-bar test">
        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>Users</h3>
        <form class="uk-search uk-search-default" style="width: 220px">
          <span uk-search-icon></span>
          <input
            class="uk-search-input"
            type="search"
            placeholder="Search..."
            v-model="search"
          />
        </form>
        <!--The first four Users-->
        <div>
          <div
            v-show="Show"
            v-for="use in sliceList"
            class="uk-flex uk-child-width-expand@s "
            uk-grid
          >
            <div v-if="!test(use.id) && !confirm(use.id)">
              <img
                class="uk-border-circle"
                width="40"
                height="40"
                :src="use.image"
              />
              <span>{{ use.name }}</span>
            </div>

            <button
              v-if="!test(use.id) && !confirm(use.id)"
              @click="addfren(use.id, use.image, use.name, use.alias)"
            >
              <i class="fa fa-user-plus"> fren</i>
            </button>
            <div style="margin: 30px" v-else class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close></a>
              <p>
                {{ msg }}<span>{{ use.name }}</span>
              </p>
            </div>
          </div>

          <!--            Show all users-->
          <br />
          <a style="color: orange" @click="change"
            >Show <span v-show="Show">all </span
            ><span v-show="Show" uk-icon="triangle-down"></span>
            <span v-show="!Show">less</span
            ><span v-show="!Show" uk-icon="triangle-up"></span
          ></a>
          <!--           All users -->
          <div
            v-show="!Show"
            v-for="use in filteredList"
            class="uk-flex uk-child-width-expand@s "
            uk-grid
          >
            <div v-if="!test(use.id) && !confirm(use.id)">
              <img
                class="uk-border-circle"
                width="40"
                height="40"
                :src="use.image"
              />
              <span>{{ use.name }}</span>
            </div>

            <button
              v-if="!test(use.id) && !confirm(use.id)"
              @click="addfren(use.id, use.image, use.name, use.alias)"
            >
              <i class="fa fa-user-plus"> fren</i>
            </button>

            <div style="margin-bottom: auto;margin-left: 25px" v-else class="uk-alert-primary" uk-alert>
              <a class="uk-alert-close" uk-close ></a>
              <p>
                {{ msg }}<span>{{ use.name }}</span>
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
import {fb} from "@/firebase/init";

export default {
  name: "sidebar",

  data() {
    return {
      users: [],
      gallery: [],
      id: firebase.auth().currentUser.uid,
      msg: "",
      name: null,
      image: null,
      myAlias: null,
      testing: [],
      requester: null,
      search: "",
      Show: true
    };
  },

  methods: {
    addfren(id, image, name, alias) {
      db.collection("friendships")
        .add({
          requester: this.id,
          user_requested: id,
          user_requestedImage: image,
          status: null,
          name: this.name,
          user_requestedName: name,
          requesterImage: this.image,
          userRequestedAlias: alias,
          myAlias: this.myAlias
        })
        .then(ref => {
          db.collection("friendships")
            .doc(ref.id)
            .update({
              request_id: ref.id
            });
        });
    },
    test(id) {
      return this.testing.find(map => {

        return map.user_requested == id && map.requester == this.id;
      });

    },
    confirm(id) {
      return this.testing.find(map => {

        return map.user_requested == this.id && map.requester == id;
      });
    },
    change() {
      if (!this.Show) {
        this.Show = true;
      } else {
        this.Show = false;
      }
    }
  },
  firestore() {
    return {
      testing: fb.collection('friendships')
    }
  },
  computed: {
    filteredList() {
      return this.users.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    sliceList() {
      return this.filteredList.slice(0, 4);
    }
  },

  created() {
    db.collection("Profile")
      .where("id", "==", this.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.name = doc.data().name;
          this.image = doc.data().image;
          this.myAlias = doc.data().alias;
        });
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
    this.$store.dispatch("Users", this.users);


  }
};
</script>

<style scoped>
#sidebar {
  /*height: 100%;*/

  float: left;
  position: fixed;
}
.sidebar {
  width: 100px;
  height: 107%;
  margin: 0;
}
#sidebar {
  background: black;
  width: 25%;
  /*margin-bottom: -4px;*/
  /*bottom: -5;*/
}
.uk-offcanvas-bar {
  background-color: #0a2b4e;
}

.me {
  overflow: auto;
  max-height: 500px;
}
.uk-inline {
  background: #0a2b4e;
}

i {
  margin-right: 5px;
  font-size: 1.2em;
  color: #0a2b4e;
}
a {
  color: orangered;
  font-size: 1.2em;
}
button {
  margin-right: 15px;
  background-color: orangered;
  width: 10px;
}
img {
  width: 30px;
  height: 30px;
}
.uk-flex {
  margin-top: 15px;
}
span {
  margin-left: 5px;
}
.test {
  width: 500px;
}
</style>
