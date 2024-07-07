import Service from "./service.js";
import repo from "../5-repositories/tool.repo.js";

class ToolService extends Service {
    constructor() {
        super(repo);
    }
}

export default new ToolService();