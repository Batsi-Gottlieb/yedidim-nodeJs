import Repository from "./repository.js";
import Status from "../models/ststus.model.js";

class StatusRepository extends Repository {
    constructor() {
        super(Status);
    }
}

export default new StatusRepository();