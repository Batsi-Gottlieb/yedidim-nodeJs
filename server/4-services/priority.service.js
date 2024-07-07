import Service from "./service.js";
import repo from "../5-repositories/priority.repo.js";

class PriorityService extends Service {
    constructor() {
        super(repo);
    }
}

export default new PriorityService();