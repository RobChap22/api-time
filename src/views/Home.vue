<template>
  <v-row>
    <v-col>
      <h1 to='/gallery' >{{ gallery[0].fields.title }}</h1>
    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as Contentful from 'contentful';


  export default Vue.extend({
    name: 'Home',
    data() {
      return {
        client: null,
        gallery: null,
      }
    },
    mounted() {
      this.client = Contentful.createClient({
          space: "g31dyjc0dhaa",
          accessToken: "RTomXH7fKYbwdsci7vLV4VThsANN4Fv_PydbBNtfueA"
        }),

      this.client
        .getEntries({ 'content_type': 'gallery'})
        .then((response) => this.gallery = response.items)
        .catch(err => console.log(err));

    },
  });
</script>

