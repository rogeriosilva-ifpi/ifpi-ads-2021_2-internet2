import * as admin from 'firebase-admin'
import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

// Inicilizando o Firebase
var serviceAccount = require("./app-filmes-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore()

app.use(express.json())
app.use(cors())

// rotas (Filme: id, nome, tema, ano, duracao)
app.get('/filmes', async (req: Request, res: Response) => {

    const filmesRef = db.collection('filmes')

    const filmesDoc = await filmesRef.get()

    const filmes: any[] = []
    
    filmesDoc.docs.forEach(doc=>filmes.push({id: doc.id, ...doc.data()}))

    return res.status(200).json(filmes)
})

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