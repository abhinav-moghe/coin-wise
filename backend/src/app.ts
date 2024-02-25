import express from "express"
import routes from "./routes"

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())

// routes
app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT, ${PORT}`)
})
