import { RESTDataSource } from "apollo-datasource-rest";
import { ApolloError } from "apollo-server";
import { UnauthorizedError } from "type-graphql";
import { latest_recommendations, serviced_location } from "../models";
import { Context, Random } from "../utils";

/**
 * This is an example REST Data Source and does **not** interfaces with a live endpoint
 */
export class ServicedLocationService extends RESTDataSource<Context> {
    constructor() {
        super();
        this.baseURL = process.env.SERVICED_LOCATION_URL || `http://test:1234`
    }

    getServicedLocationById = async (id: string): Promise<serviced_location> => {
        // log function invocation
        // const resp = await this.get(`v1/getServicedLocation`, id, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: this.context.token,
        //     }
        // }).catch(error => {
        //     // log error
        //     throw new ApolloError(`${error}`);
        // })

        // return { ...resp } as serviced_location;

        return Random.servicedLocation();
    }

    getServicedLocationLatestRecommendations = async (id: string): Promise<latest_recommendations> => {
        return Random.latestRecommendation();
        // log function invocation
        const resp = await this.get(`v1/getServicedLocationLatestRecommendations`, id, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.context.token,
            }
        }).catch(error => {
            throw new ApolloError(`${error}`);
        })

        return { ...resp } as latest_recommendations;
    }

    updateServicedLocationBy = async (location: serviced_location): Promise<serviced_location> => {
        // Use the token or user context to check current user permissions
        // if !(this.context.user.roles.some(role => role === `canUpdateThisLocation()`) {
        //    throw new UnauthorizedError();
        //}
        
        const resp = await this.put(`v1/updateServicedLocation`, location, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: this.context.token,
            }
        }).catch(error => {
            throw new ApolloError(`${error}`);
        })

        return {
            ...resp
        } as serviced_location;
    }
}