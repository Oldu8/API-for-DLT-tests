import Router from 'express';
import TestController from './TestController.js';

const router = new Router();

router.post('/tests', TestController.create)
router.get('/tests', TestController.getAll)
router.get('/tests/:id', TestController.getOne)
router.put("/tests", TestController.update)
router.delete('/tests/:id', TestController.delete)

export default router;