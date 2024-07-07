import  Controller  from "./controller.js";
import service from "../4-services/location.service.js";
class LocationsController extends Controller {
    constructor() {
        super(service);
    }

   }
    export default new LocationsController();