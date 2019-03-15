import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
// import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
// import { graphql } from "graphql";

interface CodeCoverageData {
  name: string;
  coverage: number;
  date: string;
  status?: string;
}

export class CCData {
  public readonly client: ApolloClient<any>;
  public readonly query = gql`
      {
        projects {
          name
          coverage
          lastUpdated
        }
      }
    `;

  //constructor()
  constructor(client?: ApolloClient<any>) {
    if (client) {
      this.client = client;
    } else {
      this.client = new ApolloClient({
        //TODO get from ENV Variable
        uri: "http://localhost:4000"
      });
    }
  }

  async GetCCData(): Promise<CodeCoverageData[]> {
    

    //copied from AppHubApi
    //TODO sync up schema between api and gui
    // const typeDefs = gql`
    //   # Comments in GraphQL are defined with the hash (#) symbol.
    //   scalar Date

    //   type Project {
    //     name: String
    //     coverage: Int
    //     lastUpdated: Date
    //   }

    //   # The "Query" type is the root of all GraphQL queries.
    //   # (A "Mutation" type will be covered later on.)
    //   type Query {
    //     projects: [Project]
    //   }
    // `;

    // const schema = makeExecutableSchema({ typeDefs: typeDefs });
    // addMockFunctionsToSchema({ schema });

    // graphql(schema, query).then(result => console.log("Got result", result));

    // const client = new ApolloClient({
    //   //TODO get from ENV Variable
    //   uri: "http://localhost:4000"
    // });

    try {
      let result = await this.client.query({
        query: this.query
      });
      console.log(result);
      if (result.data.projects.length > 0) {
        return result.data.projects.map((project: any) => {
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
