<template>
  <v-app>
    <v-app-bar
      color="deep-purple accent-4"
      dark
      app
    >
      <v-toolbar-title>Goodnight Kiki</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class='app'>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'App',
});
</script>


<style>
  .app {
    background-color: #CE6A74;
  }
</style>
