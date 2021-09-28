import {Router} from 'express'
import filmeRoutes from './filmeRoutes'

const router = Router()

// Rotas sobre Filmes
router.use('/filmes', filmeRoutes)


export default router
