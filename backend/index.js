import express from 'express';
import userRouter from "./routes/user.route.js"
import pinRouter from "./routes/pin.route.js"
import commentRouter from "./routes/comment.route.js"
import boardRouter from "./routes/board.route.js"
import connectDB from './utils/connectDB.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';


const app = express()
app.use(express.json())
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use(cookieParser())

app.use("/users",userRouter)
app.use("/pins",pinRouter)
app.use("/comment",commentRouter)
app.use("/board",boardRouter)


app.listen(3000,() => {
    connectDB()
    console.log('Server is running on port 3000')
})