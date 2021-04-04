import express from 'express';
import { API_CONTROLLER } from '../controllers/requsetController.js';
import cacheFun from '../middlewares/cacheMiddleware.js';
const router = express.Router();

router.get('/:date', cacheFun(60), API_CONTROLLER);

export default router;
