import { Router } from 'express';
import { imageController } from './services';

export const router = Router();

router.get('/image/get', imageController.get);
router.post('/image/save', imageController.save);
