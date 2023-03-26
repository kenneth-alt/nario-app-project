import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { entriesRouter } from "./routes/entryRoutes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/entries', entriesRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))
