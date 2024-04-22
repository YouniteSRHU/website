import express from 'express';
import { newsPageController, specificEventController, youthFestPageController } from '../controllers/eventDataControllers.js';

const router = express.Router();

/* GET home page. */
router.get('/event/:eventId', specificEventController);
router.get('/youthfest', youthFestPageController);
router.get('/news', newsPageController);


export default router;
