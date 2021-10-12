import { ApolloError } from "apollo-server-errors";
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { latest_recommendations, serviced_location } from "../models";
import { Context, Random } from "../utils";

@Resolver(() => serviced_location)
export class ServicedLocationResolver {
    private sampleCollection: serviced_location[] = [
        Random.servicedLocation(),
        Random.servicedLocation(),
        Random.servicedLocation()
    ];

    @Query(() => [serviced_location])
    async getServicedLocationsList() {
        return await this.sampleCollection;
    }

    @Query(() => serviced_location)
    async getServicedLocationsById(@Arg('id') id: string, @Ctx() ctx: Context) {
        try {
            const data = await ctx.dataSources.servicedLocationService.getServicedLocationById(id);
            return data;

        } catch (error) {
            throw new ApolloError(error);
        }
    }

    @Mutation(() => serviced_location)
    async addServicedLocation(
        @Arg('servicedLocation', () => serviced_location, { nullable: false }) servicedLocation: serviced_location,
        @Ctx() ctx: Context) {
        try {
            this.sampleCollection = [
                ...this.sampleCollection,
                servicedLocation as serviced_location
            ]

            return servicedLocation;
        } catch (error) {
            throw new ApolloError(error);
        }
    }

    /**
     * Object type field resolvers (e.g. when a user type has a field posts) which we have to resolve by fetching relational data from the database or a separate REST API endpoint.
     * @param location 
     * @param ctx 
     * @returns latest_recommendation
     */
    @FieldResolver(() => latest_recommendations)
    async recommendations(@Root() location: serviced_location, @Ctx() ctx: Context) {
        try {
            const latestRecommendations = await ctx.dataSources.servicedLocationService.getServicedLocationLatestRecommendations(location.index_record_number);
            return latestRecommendations;
        } catch (error) {
            throw new ApolloError(error);
        }
    }
}