import Service from "./service.js";
import repo from "../5-repositories/location.repo.js";

class LocationService extends Service {
    constructor() {
        super(repo);
    }
}

export default new LocationService();