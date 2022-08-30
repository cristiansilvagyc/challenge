import { Router } from 'express';
import users from '../routes/userRoutes'

const router: Router = Router();
router.use('/users', users);

export = router
