import { Router } from 'express';
import { getColors, postColor } from '../controllers/colors.controller.js';

const router = Router();

router.get('/color', getColors);
router.get('/color/:type', getColors);
router.post('/color', postColor);
router.post('/', postColor);

export default router;
