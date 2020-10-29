<template>
  <v-row>
    <v-spacer></v-spacer>
    <v-col>
      <v-img
        :src='post.fields.image.fields.file.url'
        aspect-ratio="1"
        class="grey lighten-2"
        to='/photoshow'
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as Contentful from 'contentful';


  export default Vue.extend({

    data() {
      return {
        client: null,
        post: null,
      }
    },

    props: {
      entryId: {
        type: String,
        required: true
      }
    },

    mounted() {
      this.client = Contentful.createClient({
          space: "g31dyjc0dhaa",
          accessToken: "RTomXH7fKYbwdsci7vLV4VThsANN4Fv_PydbBNtfueA"
        }),


      this.client
        .getEntry(this.$route.params.id)
        .then((entry) => this.post = entry)
        .catch(console.error)

    },

  });
</script>

