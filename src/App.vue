<template>
  <div id="app">
    <MonitorView></MonitorView>
    <ControllerView></ControllerView>
    <InputView></InputView>
  </div>
</template>

<script>
import ControllerView from "./views/ControllerView.vue";
import MonitorViewVue from "./views/MonitorView.vue";
import InputView from "./views/InputView.vue";

export default {
  components: {
    ControllerView,
    MonitorView,
    InputView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
