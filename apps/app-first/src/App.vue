<template>
  <div class="app">
    <div class="nav">
      <router-link to="/app-first/home">Home</router-link> |
      <router-link to="/app-first/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import './base';
export default {}
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
