import { NonEmptyArray } from "type-graphql";
import { ServicedLocationResolver } from "./serviced-location.resolver";

export default [
    ServicedLocationResolver
] as NonEmptyArray<Function>

export * from './serviced-location.resolver';