import Repository from "./repository.js";
import Priority from "../models/prioritye.model.js";

class PriorityRepository extends Repository {
    constructor() {
        super(Priority);
    }
}

export default new PriorityRepository();