import express from "express"
import dotenv from "dotenv"
import { router } from "../routes/routes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.use('/entries', router)



app.listen(port, () => console.log(`Server started on port ${port}`))
