import { ServicedLocationService } from './serviced-location.service';

export default () => {
    return {
        servicedLocationService: new ServicedLocationService(),
    }
}
