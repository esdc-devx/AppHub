<template>
    <div id="coreDataTable">
      <table class="table">
        <caption>{{ caption }}</caption>
        <thead>
          <tr>
            <td>{{ slnHeader }}</td>
            <td colspan="2">{{ coverageHeader }}</td>
            <td>{{ dateHeader }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="solution in solutions">
            <td>{{ solution.name }}</td>
            <td><progress v-bind:value="solution.cdCoverage" max="100"></progress></td>
            <td>{{ solution.cdCoverage }}%</td>
            <td>{{ solution.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CoreDataTable extends Vue {
  @Prop() private caption: string =  'Code Coverage Status';
  @Prop() private slnHeader: string = 'Solution';
  @Prop() private coverageHeader: string = 'Coverage';
  @Prop() private dateHeader: string = 'Date Updated';
  @Prop() private  solutions: any[] = [
       {
            name: 'app1',
            cdCoverage: 0,
            date: 'n/a'
        },
        {
            name: 'App 2',
            cdCoverage: 80,
            date: '2019/02/04 12:15'
        },
    ];
}
</script>

<!-- Shcould be taken from the WET teamplate -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
