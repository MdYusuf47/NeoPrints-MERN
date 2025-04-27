import express from 'express';

const app = express()

app.use("/test",(req,res) => {
    return res.json("Hello from the backend")
})

app.listen(3000,() => {
    console.log('Server is running on port 3000')
})