<template>
  <v-row>
    <v-col>
      <v-btn
        text
        rounded
        v-for='(gallery, i) in galleries'
        :key='i'
        @click='pushToGallery(gallery.sys.id)'
      >
        {{ gallery.fields.title }}
      </v-btn>

    </v-col>
  </v-row>
</template>

<script lang="ts">
  import Vue from 'vue';
  import * as Contentful from 'contentful';
  import { listGalleries } from '@/api/apiMethods';


  export default Vue.extend({

    data() {
      return {
        galleries: null,
      }
    },
    async mounted() {
      const response = await listGalleries();
      this.galleries = response.items;
      console.log(this.galleries)
    },

    methods: {
      pushToGallery(id) {
        return this.$router.push({ name: 'Gallery', params: { id } });
      }
    }
  });
</script>

