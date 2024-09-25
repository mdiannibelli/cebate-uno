import express from 'express'

import matesRoutes from './routes/mates'

const app = express()

app.use(express.json()) // middleware => req.body a json
const $PORT = 3000

app.get('/', (_, res) => {
  res.send('Hello world')
})

app.use('/api/mates', matesRoutes)

app.listen($PORT, () => {
  console.log(`Server running on port ${$PORT}`)
})
