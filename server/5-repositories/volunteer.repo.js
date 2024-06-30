import Repository from "./repository.js";
import Volunteer from "../models/volunteer.model.js";

class VolunteerRepository extends Repository {
    constructor() {
        super(Volunteer);
    }
}

export default new VolunteerRepository();