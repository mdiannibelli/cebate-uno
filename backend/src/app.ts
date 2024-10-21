import express, { Request, Response } from 'express'
import cors from 'cors'

import matesRoutes from './routes/mates'
import lightbulbRoutes from './routes/bombillas'

const app = express()

app.use(cors())
app.use(express.json()) // middleware => req.body a json
const $PORT = 3000

app.get('/', (_: Request, res: Response) => {
  res.send('Hello world')
})

app.use('/api/mates', matesRoutes)
app.use('/api/bombillas', lightbulbRoutes)

app.listen($PORT, () => {
  console.log(`Server running on port ${$PORT}`)
})
