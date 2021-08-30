import * as admin from 'firebase-admin'
import express, {Request, Response} from 'express'

const app = express()

// Inicilizando o Firebase
var serviceAccount = require("./app-filmes-35501-firebase-adminsdk-lle6q-312745d244.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore()

app.use(express.json())

// rotas (Filme: id, nome, tema, ano, duracao)
app.get('/filmes', async (req: Request, res: Response) => {

    const filmesRef = db.collection('filmes')

    const filmesDoc = await filmesRef.get()

    const filmes: any[] = []
    
    filmesDoc.forEach(doc=>filmes.push(doc.data()))

    return res.status(200).json(filmes)
})

app.post('/filmes', (req: Request, res: Response) => {
    const {id, nome, tema, duracao} = req.body

    return res.status(201).json({id, nome})
})

app.get('/filmes/:id', (req: Request, res: Response) => {

    const id = req.params.id

    const filme = {id, nome: 'Lagoa Azul', ano: 1995}

    return res.json(filme)
})

app.put('/filmes/:id', (req, res) => {
    // 1. pegar no BD o obj de id, e atualizar seu dados
    // 2. return obj atualizado

    const { id } = req.params

    const filme = {id, nome: 'Lagoa Azul', ano: 1995}

    return res.json(filme)
})

app.delete('/filmes/:id', (req, res) => {
    const {id} = req.params

    return res.status(204).send()
})


// arrow function () => {}
 app.listen(3000, ()=>{
     console.log('App running...')
 })