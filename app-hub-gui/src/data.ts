interface CodeCoverageData {
  name: string;
  coverage: number;
  date: string;
  status?: string;
}

export class CCData {
  constructor() {}

  GetCCData(): CodeCoverageData[] {
    return [
      {
        name: "app1",
        coverage: 0,
        date: "n/a"
      },
      {
        name: "App 2",
        coverage: 80,
        date: "2019/03/04 12:15"
      },
      {
        name: "Custom App",
        coverage: 15,
        date: "2019/02/12 11:43"
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
