import Repository from "./repository.js";
import Priority from "../models/priority.model.js";

class PriorityRepository extends Repository {
    constructor() {
        super(Priority);
    }
}

export default new PriorityRepository();