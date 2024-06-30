import Repository from "./repository.js";
import Tool from "../models/tool.model.js";

class ToolRepository extends Repository {
    constructor() {
        super(Tool);
    }
}

export default new ToolRepository();