import { QueryApi, IQueryApi } from "./queryApi"


interface CodeCoverageData {
  name: string;
  coverage: number;
  date: string;
  status?: string;
}

export class CCData {
  public readonly API : IQueryApi

  constructor(api? : IQueryApi) {
    if (api) {
      this.API = api
    } else {
      this.API = new QueryApi
    }
  }

  async GetCCData(): Promise<CodeCoverageData[]> {
  
    try {
      let result = await this.API.QueryCcData();
      console.log(result);

      if (result.length > 0) {
        return result.map((project: any) => {
          return {
            name: project.name,
            coverage: project.coverage,
            date: project.lastUpdated
          };
        });
      }
      return [
        {
          name: "No Data Found",
          coverage: 0,
          date: "n/a"
        }
      ];
    } catch (error) {
      console.log(error);
      return [
        {
          name: "Error calling backend",
          coverage: 0,
          date: "n/a"
        }
      ];
    }
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

  async GetCCDataWithAlert(): Promise<CodeCoverageData[]> {
    var data = await this.GetCCData();
    data.forEach(app => {
      app.status = this.GetCCAlert(app.coverage);
    });
    return data;
  }
}
