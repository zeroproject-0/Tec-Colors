import { Router } from 'express';
import { getColors, postColor } from '../controllers/colors.controller.js';

const router = Router();

router.get('/colors', getColors);
router.get('/colors/:type', getColors);
router.post('/colors', postColor);
router.post('/', postColor);

export default router;
