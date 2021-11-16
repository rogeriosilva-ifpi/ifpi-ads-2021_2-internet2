import {Router} from 'express'
import { AuthController } from '../controllers/AuthController'

const router = Router()

const authController = new AuthController()

router.post('/signup', authController.signUp)
router.post('/signin', authController.signin)
router.post('/refresh', authController.refresh)

export default router