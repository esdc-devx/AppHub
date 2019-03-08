<template>
  <div id="coreDataTable">
    <table class="table">
      <caption>
        {{
          caption
        }}
      </caption>
      <thead>
        <tr>
          <th v-for="name in headers" :key="name.id">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sln in solutions" v-bind:class="sln.status" :key="sln.id">
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
import { CCData } from "../data";

@Component
export default class CoreDataTable extends Vue {
  @Prop() private caption: string = "Code Coverage Status";
  @Prop() private headers: any[] = ["Solution", "Coverage", "Updated"];
  @Prop() private solutions: any[] = [];

  created() {
    const apiClient = new CCData();
    this.solutions = apiClient.GetCCDataWithAlert();
  }
}
</script>

<!-- Shcould be taken from the WET teamplate -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
