import express from 'express'
import cors from 'cors'
import './src/infrastructure/persistence/firestore'
import routes from './src/presentation/routes'


const app = express()

// Inicilizando o Firebase: 
// movido para infra../firestore/index.ts

app.use(express.json())
app.use(cors())
app.use(routes)


// arrow function () => {}
 app.listen(3003, ()=>{
     console.log('App running...')
 })