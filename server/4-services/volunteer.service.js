import Service from "./service.js";
import repo from "../5-repositories/volunteer.repo.js";

class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
}

export default new VolunteerService();
