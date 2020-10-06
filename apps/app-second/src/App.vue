<template>
  <div class="app">
    <div class="nav">
      <router-link to="/app-second/home">Home</router-link> |
      <router-link to="/app-second/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import './base';

@Component
export default class AppTypescript extends Vue {}
</script>

<style scoped>
.app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.nav {
  padding: 30px;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
