const express = require('express')
const app = express()
const port = 8000

console.log("PORT".repeat(200), process.env.PORT);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})