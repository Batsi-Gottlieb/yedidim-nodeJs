import express from "express";
import controller from '../3-controllers/help_requests.controller.js';

const router = express.Router();
router.get('/', controller.getAll);
router.post('/', controller.insert)
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete)
router.put('/:personal_code/:id_help_requests', controller.Ivolunteer) 
//router.get('/help-requests', controller.get)


//  router.put('/:id', controller.update)

export default router;