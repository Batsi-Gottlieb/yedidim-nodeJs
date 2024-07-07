import Service from "./service.js";
import repo from "../5-repositories/status.repr.js";

class StatusService extends Service {
    constructor() {
        super(repo);
    }
}

export default new StatusService();