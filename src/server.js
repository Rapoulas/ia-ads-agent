import express from 'express'
import { iaController } from './controllers/iaController.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.post('/ia', iaController)

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})