<template>
  <div id="app">
    <div id="appDetails">
      <h1>{{ name }}</h1>
      <p>{{ description }} <em>{{ build }}</em></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  @Prop() private name = "App Hub";
  @Prop() private description = 'The ' + this.name + ', otherwise known as the Application Dashboard Hub. The ' + this.name + ' is a dashboard to show application pipeline status for multiple solutions in ESDC.';
  @Prop() private build = 'Built by the Developer Experience team.';
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
