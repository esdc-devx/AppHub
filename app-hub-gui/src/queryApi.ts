import gql from "graphql-tag";
import ApolloClient, { ApolloQueryResult } from "apollo-boost";

export interface IQueryApi {
    QueryCcData() : Promise<any>
}

export class QueryApi implements IQueryApi {
    public readonly client: ApolloClient<any> = new ApolloClient({
        //TODO get from ENV Variable
        uri: "http://localhost:4000"
    })

    async QueryCcData() : Promise<any> {
        const GetCcDataQuery = gql`{
            projects {
                name
                coverage
                lastUpdated
            }
        }`;

        try {
            let result = await this.client.query({
                query: GetCcDataQuery
            });            
            console.log(result);
            
            return result.data.projects
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

export class TestQueryApi implements IQueryApi {
    async QueryCcData() : Promise<any> {
        return [
            {
              name: 'Test Project 1',
              coverage: 98,
              //lastUpdated: () =>  new Date(1982,01,01)
            },
            {
              name: 'Second Test Project',
              coverage: 18,
              //lastUpdated: () => new Date(1985, 01, 01)
            },
            {
              name: 'Other Test Project',
              coverage: 0,
              //lastUpdated: () => new Date(1991, 01, 01)
            }
        ];
    }
}