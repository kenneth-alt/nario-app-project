import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { router } from "./routes/entryRoutes.js"

connectDB()

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/entries', router)



app.listen(port, () => console.log(`Server started on port ${port}`))
