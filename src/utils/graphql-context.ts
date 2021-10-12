import { User } from "../models";
import { ServicedLocationService } from '../services/serviced-location.service'

export interface Context {
  token: string;
  user: User;
  request: Express.Request;
  resolverType: string;
  dataSources: DataSources;
}

export interface DataSources {
  servicedLocationService: ServicedLocationService;
}
