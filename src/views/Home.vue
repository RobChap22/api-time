<template>
  <v-row>
    <v-col>
      <v-btn
        text
        rounded
        to='/gallery'
      >
        {{ gallery[0].fields.title }}
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
        gallery: null,
      }
    },
    async mounted() {
      const response = await listGalleries();
      this.gallery = response.items;

    },
  });
</script>

