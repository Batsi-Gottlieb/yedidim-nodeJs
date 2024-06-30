import express from "express";
import controller from '../3-controllers/volunteers.controller.js';
const router = express.Router();
router.get('/', controller.getAll);
router.post('/', controller.insert);
router.get('/:id', controller.getById);
router.delete('/:id', controller.delete)

// router.put('/:id', controller.update)
// router.post('/', controller.insert)
export default router;
// import Student from './models/student.model.js';
// import connect from './db.js';