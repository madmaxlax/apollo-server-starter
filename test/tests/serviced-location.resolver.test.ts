import { ApolloServer, gql } from "apollo-server";
import { ApolloServerTestClient, createTestClient } from "apollo-server-testing";
import { buildSchema } from "type-graphql";
import { createTestClientWrapper, emitTestSchemaFile } from "../createTestClientWrapper";
import { ServicedLocationResolver } from "../../src/resolvers";
import { ServicedLocationService } from "../../src/services/serviced-location.service";
import { Random } from "../../src/utils";
describe('Deals queries and mutations', () => {
    let mutateTest: ApolloServerTestClient['mutate'];
    let queryTest: ApolloServerTestClient['query'];
    let testServer: ApolloServer;

    let servicedLocationService: ServicedLocationService;

    beforeAll(async () => {
        const schema = await buildSchema({
            resolvers: [ServicedLocationResolver],
            emitSchemaFile: emitTestSchemaFile,
            nullableByDefault: true,
            authChecker: () => true,
            validate: false,
        });
        servicedLocationService = new ServicedLocationService();
    
        testServer = new ApolloServer({
            schema,
            dataSources: () => ({ servicedLocationService }),
            playground: false,
            context: async ({ req }) => {
              return {
                user: Random.user({ type: 'testRole' }),
                token: req.headers.authorization || '',
              };
            },
          });

          const { query, mutate } = createTestClientWrapper(testServer);
          mutateTest = mutate;
          queryTest = query;
    })



    const SERVICED_LOCATIONS_QUERY = gql`
        query getServicedLocationsById($id: String) {
            getServicedLocationsById(id: $id) {
                account_engineer_employee_id
                index_record_number
                county_name
            }
        }
    `

    it(`should return a serviced location by id`, async () => {
        const id = Random.guid();
        const servicedLocation = Random.servicedLocation({
            account_engineer_employee_id: 1234,
            index_record_number: `9876`,
            country_name: 'United States'
        });

        servicedLocationService.getServicedLocationById = () => Promise.resolve(servicedLocation);

        const result = await queryTest({
            variables: {
                id: id,
            },
            query: SERVICED_LOCATIONS_QUERY,
        });

        expect(result?.data?.getServicedLocationsById?.account_engineer_employee_id).toEqual(1234);
    })

});