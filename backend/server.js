import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { readmeRouter } from "./routes/readmeRoute.js"
import { entriesRouter } from "./routes/entryRoutes.js"
import { userRouter } from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/', readmeRouter)
app.use('/entries', entriesRouter)
app.use('/users', userRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
