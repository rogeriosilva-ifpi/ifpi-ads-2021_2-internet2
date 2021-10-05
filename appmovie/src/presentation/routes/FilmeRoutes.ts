import {Router, Request, Response} from 'express'
import { db } from '../../infrastructure/persistence/firestore'
import { MovieController } from '../controllers/MovieController'

const router = Router()

// Rotas específicas de Filme

const movieController = new MovieController()
// rotas (Filme: id, nome, tema, ano, duracao)
router.get('/', movieController.getAll)
router.post('/', movieController.create)

router.get('/:id', async (req: Request, res: Response) => {

    const id = req.params.id

    const filme = await db.collection('filmes').doc(id).get()

    return res.json({id: filme.id, ...filme.data()})
})

router.put('/:id', (req, res) => {
    // 1. pegar no BD o obj de id, e atualizar seu dados
    // 2. return obj atualizado

    const { id } = req.params

    const filme = {id, nome: 'Lagoa Azul', ano: 1995}

    // TODO

    return res.json(filme)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    // TODO

    return res.status(204).send()
})

export default router
