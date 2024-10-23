import express, { Request, Response } from 'express'
import cors from 'cors'

import matesRoutes from './routes/mates.routes'
import lightbulbRoutes from './routes/bombillas.routes'
import { config } from './config/config'

const app = express()

app.use(cors())
app.use(express.json()) // middleware => req.body a json

app.get('/', (_: Request, res: Response) => {
  res.send('Hello world')
})

app.use('/api/mates', matesRoutes)
app.use('/api/bombillas', lightbulbRoutes)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
