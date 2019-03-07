<template>
  <div id="coreDataTable">
    <table class="table">
        <caption>{{ caption }}</caption>
      <thead>
        <tr>
          <th v-for="key in headers">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sln in solutions" v-bind:class="sln.status">
          <td>{{ sln.name }}</td>
          <td>
            <progress v-bind:value="sln.coverage" max="100"></progress>
            <span class="mrgn-lft-md">{{ sln.coverage }}%</span>
          </td>
          <td>{{ sln.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CoreDataTable extends Vue {
  @Prop() private caption: string = "Code Coverage Status";
  @Prop() private headers: any[] = ["Solution", "Coverage", "Updated"];
  @Prop() private solutions: [] = GetCCDataWithAlert(); //public\code\data.js calling this function, functionally works yet the vue cli still thows an error
}
</script>

<!-- Shcould be taken from the WET teamplate -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
