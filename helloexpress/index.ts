import express, {Request, Response} from 'express'
import cors from 'cors'
import './src/infrastructure/persistence/firestore'
import {db} from './src/infrastructure/persistence/firestore'
import { MovieController } from './src/presentation/controllers/MovieController';

const app = express()

// Inicilizando o Firebase: 
// movido para infra../firestore/index.ts

app.use(express.json())
app.use(cors())

const movieController = new MovieController()
// rotas (Filme: id, nome, tema, ano, duracao)
app.get('/filmes', movieController.getAll)

app.post('/filmes', async (req: Request, res: Response) => {
    const {nome, genero, duracao, ano} = req.body

    const filme = {nome, genero, duracao: Number(duracao), ano: Number(ano)}

    const resultado = await db.collection('filmes').add(filme)

    return res.status(201).json({id: resultado.id, ...filme})
})

app.get('/filmes/:id', async (req: Request, res: Response) => {

    const id = req.params.id

    const filme = await db.collection('filmes').doc(id).get()

    return res.json({id: filme.id, ...filme.data()})
})

app.put('/filmes/:id', (req, res) => {
    // 1. pegar no BD o obj de id, e atualizar seu dados
    // 2. return obj atualizado

    const { id } = req.params

    const filme = {id, nome: 'Lagoa Azul', ano: 1995}

    // TODO

    return res.json(filme)
})

app.delete('/filmes/:id', (req, res) => {
    const {id} = req.params
    // TODO

    return res.status(204).send()
})


// arrow function () => {}
 app.listen(3000, ()=>{
     console.log('App running...')
 })