import { Router, Request, Response, NextFunction } from 'express';
import userController from '../controller/userController'

const router: Router = Router();
const controller = new userController();

router.get('/:userId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.params;
        const resp  = await controller.getUserById(Number(userId));
        res.status(200).json(resp);
    } catch (err) {
        next(err)
    }
    ;
})
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await controller.updateUser(req.body)
        res.status(200).json(resp)
    } catch (err) {
        next(err)
    }     
});
router.put('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await controller.addUser(req.body)
        res.status(200).json(resp)
    } catch (err) {
        next(err)
    }    
});
router.delete('/:userId', async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const { userId } = req.params;
        const resp = await controller.deleteUser(Number(userId))
        res.status(200).json(resp);
    } catch (err) {
        next(err)
    }
});

export = router