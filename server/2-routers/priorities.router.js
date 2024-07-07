import express from "express";
import controller from '../3-controllers/priorities.controller.js';

const router = express.Router();
router.get('/', controller.getAll);

export default router;