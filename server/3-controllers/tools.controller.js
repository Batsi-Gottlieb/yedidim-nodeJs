import  Controller  from "./controller.js";
import service from "../4-services/tool.service.js";
class ToolsController extends Controller {
    constructor() {
        super(service);
    }

   }
    export default new ToolsController();