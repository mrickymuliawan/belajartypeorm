
import express from 'express'
const app = express()
const port = 3000


const tambahan = (a: number, b: number) => {
  return a + b
}

app.get('/', (req, res) => {
  const result = tambahan(1, 2)
  res.send(result.toString())
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))