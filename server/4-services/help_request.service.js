import Service from "./service.js";
import repo from "../5-repositories/help_request.repo.js";

class Help_requestService extends Service {
    constructor() {
        debugger
        super(repo);
    }

}

export default new Help_requestService();