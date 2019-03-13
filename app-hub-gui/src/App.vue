<template>
  <div id="app">
    <div id="appDetails">
      <h1>{{ name }}</h1>
      <p>{{ description }} <em>{{ build }}</em></p>
    </div>
    <DashBoardTable />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DashBoardTable from "./components/DashBoardTable.vue";

@Component({
  components: {
    DashBoardTable
  }
})
export default class App extends Vue {
  @Prop() private name = "App Hub";
  @Prop() private description = 'The ' + this.name + ', otherwise known as the Application Dashboard Hub. The ' + this.name + ' is a dashboard to show application pipeline status for multiple solutions in ESDC.';
  @Prop() private build = 'Built by the Developer Experience team.';
}
</script>

<!-- Shcould be taken from the WET teamplate -->
<style></style>
