import {Router} from 'express'
import movieRoutes from './MovieRoutes'
import authRoutes from './AuthRoutes'

const router = Router()

// Rotas sobre Filmes
router.use('/movies', movieRoutes)
router.use('/auth', authRoutes)


export default router
