<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <img :src='post.fields.image.fields.file.url' >
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as Contentful from 'contentful';


  export default Vue.extend({
    name: 'Home',
    data() {
      return {
        client: null,
        post: null,
      }
    },
    mounted() {
      this.client = Contentful.createClient({
          space: "g31dyjc0dhaa",
          accessToken: "RTomXH7fKYbwdsci7vLV4VThsANN4Fv_PydbBNtfueA"
        })
      console.log(this.client);
      this.client
        .getEntry("1ZHnNklxa1ObDT5CdHOghe")
        .then(entry => this.post = entry)
        .catch(err => console.log(err));
    },
  });
</script>
