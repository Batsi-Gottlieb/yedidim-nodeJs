import express from "express";
import controller from '../3-controllers/tools.controller.js';

const router = express.Router();
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insert);
router.delete('/:id', controller.delete)

export default router;
