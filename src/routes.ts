import { Router } from 'express';

const UserController = require('./controllers/UserController');

const router = Router();

router.get('/registros', UserController.index);
router.post('/:name/registrar', UserController.store);
router.get('/:_id/validar', UserController.show);
router.post('/cpf', UserController.by_cpf);
router.put('/:_id/validar', UserController.edit);

export default router;