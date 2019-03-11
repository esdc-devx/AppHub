import gql from "graphql-tag";

interface CodeCoverageData {
  name: string;
  coverage: number;
  date: string;
  status?: string;
}

export class CCData {
  constructor() {}

  GetCCData(): CodeCoverageData[] {
    apollo: {
      GetProjectData: gql`
        {
          projects {
            name
            coverage
            date
          }
        }
      `;
    }

    var data : CodeCoverageData[] = this.$apollo.queries.GetProjectData();

    if (data.length > 0) return data;
    return [
      {
        name: "No Data Found",
        coverage: 0,
        date: "n/a"
      }
    ];
  }
  GetCCAlert(ccPercentage?: number): string {
    if (!ccPercentage) {
      return "danger";
    } else if (ccPercentage <= 25) {
      return "warning";
    } else {
      return "success";
    }
  }
  GetCCDataWithAlert() : CodeCoverageData[] {
    var data = this.GetCCData();
    data.forEach(app => {
      app.status = this.GetCCAlert(app.coverage);
    });
    return data;
  }
}
