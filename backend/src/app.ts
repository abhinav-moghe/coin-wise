import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on PORT, ${PORT}`)
})
