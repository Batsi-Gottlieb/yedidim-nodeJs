import  Controller  from "./controller.js";
import service from "../4-services/status.sevice.js";
class StatusesController extends Controller {
    constructor() {
        super(service);
    }

   }
    export default new StatusesController();