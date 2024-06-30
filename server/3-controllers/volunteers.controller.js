import  Controller  from "./controller.js";
import service from "../4-services/volunteer.service.js";

class VolunteersController extends Controller {
    constructor() {
        super(service);
    }
}

export default new VolunteersController();