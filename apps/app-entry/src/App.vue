<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item in routes"
        :key="item.name"
        :to="item.name"
        :class="{ active: item.isActive }"
        class="link"
        >
        {{ item.title }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'entry-application',
  data() {
    return {
      // * 子项目菜单。
      routes: [
        { name: '/app-first', title: 'app-first' },
        { name: '/app-second', title: 'app-second' }
      ]
    };
  },
  watch: {
    // ? 点击判断高亮。
    $route({ path }) {
      if (typeof path === 'undefined') return;
      const oldActivedRoute = this.routes.find(item => item.isActive);
      if (oldActivedRoute) oldActivedRoute.isActive = false;
      const activedRoute = this.routes.find(({ name }) => path.startsWith(name));
      if (activedRoute) activedRoute.isActive = true;
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  padding: 0 10px;
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}
#nav a.active,
#nav a.router-link-exact-active {
  color: #ea6e76;
}
</style>
