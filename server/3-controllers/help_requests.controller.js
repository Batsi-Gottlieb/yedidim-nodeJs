import  Controller  from "./controller.js";
import service from "../4-services/help_request.service.js";

class help_requestsController extends Controller {
    constructor() {
        super(service);
        
    }
}

export default new help_requestsController();