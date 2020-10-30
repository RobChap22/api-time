<template>
  <v-row>
    <v-col
      v-for='(post, i) in posts'
      :key="i"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src='post.fields.image.fields.file.url'
        aspect-ratio="1"
        class="grey lighten-2"
        @click='pushToShow(post.sys.id)'
        @mouseover='handleMouseover(post)'
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
  </v-row>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as Contentful from 'contentful';
  import { listPhotos } from '@/api/apiMethods';


  export default Vue.extend({

    data() {
      return {
        posts: null,
      }
    },
    async mounted() {
      const response = await listPhotos(this.$route.params.id);
      this.posts = response.items;
    },

    methods: {
      pushToShow(id) {
        return this.$router.push({ name: 'PhotoShow', params: { id } });
      },
    }
  });
</script>

<style>
  .hovered {
    opacity: 0.5;
  }
</style>
