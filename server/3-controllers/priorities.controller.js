import  Controller  from "./controller.js";
import service from "../4-services/priority.service.js";
class PrioritiesController extends Controller {
    constructor() {
        super(service);
    }

   }
    export default new PrioritiesController();