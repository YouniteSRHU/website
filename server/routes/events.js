import express from 'express';
import { specificEventController, youthFestPageController } from '../controllers/eventDataControllers.js';

const router = express.Router();

/* GET home page. */
router.get('/event/:eventId', specificEventController);
router.get('/youthfest', youthFestPageController);


export default router;
